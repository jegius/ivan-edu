import template from './logo-component.template.js';
import {addListeners, select} from '../api/helpers';
import events from '../api/events';

const logoAttributes = {
	LOGO_SIZE: 'size',
	WITH_TEXT: 'with-text',
	HREF: 'href',
};

const logoSize = ['_small', '_medium', '_large'];

export class LogoComponent extends HTMLElement {
	#href;
	#link;
	#listeners = [
		[select.bind(this, '.logo'), 'click', this.#addEventListeners.bind(this)],
	];
	#ATTRIBUTE_MAPPING = new Map([
		[logoAttributes.LOGO_SIZE, LogoComponent.#setSize],
		[logoAttributes.WITH_TEXT, LogoComponent.#setWithText],
		[logoAttributes.HREF, LogoComponent.#setHref],
	]);

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get observedAttributes() {
		return Object.values(logoAttributes);
	}

	static get name() {
		return 'logo-component';
	}

	static #setWithText(element, newAttr) {
		const withText = newAttr === 'true';
		if (withText) {
			element.classList.add('_with-text');
			element.classList.remove('_no-text');
		} else {
			element.classList.remove('_with-text');
			element.classList.add('_no-text');
		}
	}

	static #setHref(element, newHref) {
		this.#href = newHref;
		if (element) {
			element.setAttribute('href', newHref);
		}
	}

	static #setSize(element, newSize) {
		for (let sizeName of logoSize) {
			if (element.classList.contains(sizeName)) {
				element.classList.replace(sizeName, '_' + newSize);
				break;
			}
		}
		element.classList.add('_' + newSize);
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

	attributeChangedCallback(name, oldValue, newValue) {
		if (newValue !== oldValue) {
			const callback = this.#ATTRIBUTE_MAPPING.get(name);
			this.#selectAndCallIfExist(callback, newValue);
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
		this.#listeners.forEach(addListeners.bind(this));

		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;
		this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
		this.#link = this.shadowRoot.querySelector('.logo');
	}
}
