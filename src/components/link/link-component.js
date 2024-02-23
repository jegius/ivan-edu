import template from './link-component.template.js';

const linkAttributes = {
	LINK_TEXT: 'text',
	HREF: 'href',
};

export class LinkComponent extends HTMLElement {
	#href;
	#link;

	#listeners = [
		[select.bind(this, '.link'), 'click', this.#addEventListeners.bind(this)],
	];

	#ATTRIBUTES_MAPPING = new Map([
		[linkAttributes.LINK_TEXT, LinkComponent.#setText],
		[linkAttributes.HREF, LinkComponent.#setHref],
	]);

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'link-component';
	}

	static get observedAttributes() {
		return Object.values(linkAttributes);
	}

	static #setText(element, newText) {
		element.innerHTML = newText;
	}

	static #setHref(element, newHref) {
		this.#href = newHref;
		if (element) {
			element.setAttribute('href', newHref);
		}
	}

	connectedCallback() {
		this.#render();
		this.#listeners.forEach(addListeners.bind(this));

		for (let attrName of this.constructor.observedAttributes) {
			if (this.hasAttribute(attrName)) {
				const attrValue = this.getAttribute(attrName);
				this.attributeChangedCallback(attrName, null, attrValue);
			}
		}
	}

	#addEventListeners(event) {
		const element = this.#href !== '#' ? document.querySelector(this.#href) : null;

		if (element) {
			event.preventDefault();
		}

	}

	disconnectedCallback() {
		this.#listeners.forEach(removeListeners);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTES_MAPPING.get(name);
			this.#selectAndCallIfExist(callback, newValue);
		}
	}

	#selectAndCallIfExist(callback, value) {
		if (this.#link) {
			callback.call(this, this.#link, value);
		}
	}

	#render() {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;
		this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
		this.#link = this.shadowRoot.querySelector('.link');
	}
}
