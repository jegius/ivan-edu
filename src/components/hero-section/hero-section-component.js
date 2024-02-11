import template from './hero-section-component.template.js';

export class HeroSectionComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'hero-section-component';
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
