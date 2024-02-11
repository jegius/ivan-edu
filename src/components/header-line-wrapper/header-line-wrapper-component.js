import template from './header-line-wrapper-component.template.js';

export class HeaderLineWrapperComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'header-line-wrapper-component';
	}

	connectedCallback() {
		this.#render();
	}

	#render() {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;
		this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
	}
}
