import template from './hero-section-paragraph-component.template.js';

export class HeroSectionParagraphComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'hero-section-paragraph-component';
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
