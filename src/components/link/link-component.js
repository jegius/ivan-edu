import template from './link-component.template.js';
import events from '../api/events.js';
import {addListeners, removeListeners, select} from '../api/helpers.js';


const linkAttributes = {
	LINK_TEXT: 'text',
	IS_ACTIVE: 'is-active',
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
		[linkAttributes.IS_ACTIVE, LinkComponent.#setActive],
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

	static #setActive(element, newAttr) {
		// console.log(element.text);
		const isActive = newAttr === 'true';
		if (isActive) {
			element.classList.add('_active');
			console.log('act added');
		} else {
			element.classList.remove('_active');
			console.log('act removed');
		}
	}

	connectedCallback() {
		console.log('connectedCallback is working!!!');
		this.#render();
		this.#listeners.forEach(addListeners.bind(this));

		for (let attrName of this.constructor.observedAttributes) {
			if (this.hasAttribute(attrName)) {
				const attrValue = this.getAttribute(attrName);
				this.attributeChangedCallback(attrName, null, attrValue);
				console.log('attributeChangedCallback used to be done!!!');
			}
		}
	}

	disconnectedCallback() {
		this.#listeners.forEach(removeListeners);
	}

	attributeChangedCallback(name, oldValue, newValue) {

		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTES_MAPPING.get(name);
			// console.log('callback----', callback);
			this.#selectAndCallIfExist(callback, newValue);
			console.log('AttributeCanged');
		}
	}

	#selectAndCallIfExist(callback, value) {
		if (this.#link) {
			callback.call(this, this.#link, value);
		}
	}

	#addEventListeners(event) {
		const element = this.#href !== '#' ? document.querySelector(this.#href) : null;
		if (element) {
			event.preventDefault();
			element.scrollIntoView({behavior: 'smooth'});
		}

		this.dispatchEvent(
			new CustomEvent(events.LINK_CLICKED, {bubbles: true, detail: this}),
		);
	}

	#render() {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;
		this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
		this.#link = this.shadowRoot.querySelector('.link');
	}
}