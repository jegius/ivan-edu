import template from './optin-section-component.template.js';

export class OptinSectionComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'optin-section-component';
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
