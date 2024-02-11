import template from './hero-section-title-component.template.js';

export class HeroSectionTitleComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'hero-section-title-component';
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
