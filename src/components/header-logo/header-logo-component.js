import template from './header-logo-component.template.js';

const logoAttributes = {
	LOGO_SIZE: 'size',
	WITH_TEXT: 'with-text',
};

const logoSize = ['_small', '_medium', '_large'];

export class HeaderLogoComponent extends HTMLElement {
	#logo;
	#ATTRIBUTE_MAPPING = new Map([
		[logoAttributes.LOGO_SIZE, HeaderLogoComponent.#setSize],
		[logoAttributes.WITH_TEXT, HeaderLogoComponent.#setWithText],
	]);

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get observedAttributes() {
		return Object.values(logoAttributes);
	}

	static get name() {
		return 'header-logo-component';
	}

	static #setWithText(element, newAttr) {
		const withText = newAttr === 'true';
		if (withText) {
			element.classList.add('_with-text');
		} else {
			element.classList.remove('_with-text');
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
			if (this.#logo) {
				callback(this.#logo, newValue);
			}
		}
	}

	#render() {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;
		this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
		this.#logo = this.shadowRoot.querySelector('.header__logo');
	}
}
