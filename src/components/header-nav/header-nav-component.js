import template from './header-nav-component.template.js';
import {addListeners, select} from '../api/helpers';
import events from '../api/events';

export class HeaderNavComponent extends HTMLElement {
	#slot;
	#list;
	#listeners = [
		[
			select.bind(this),
			events.LINK_CLICKED,
			this.#subscribeOneLinkClick.bind(this),
		],
		[
			select.bind(this, 'slot'),
			events.ON_SLOT_CHANGE,
			this.#onSlotChange.bind(this),
		],
		[
			select.bind(this, '_scrollable', window.document),
			events_SCROLL,
			debounce(this.#compareSectionPosition.bind(this)),
		],
	];
	#linksToSelections;

	constructor() {
		super();
		this.attachShadow({mode: 'open'});
	}

	static get name() {
		return 'header-nav-component';
	}

	connectedCallback() {
		this.#render();
		this.#listeners.forEach(addListeners);
	}

	#render() {
		const templateElem = document.createElement('template');
		templateElem.innerHTML = template;


		this.shadowRoot.append(templateElem.content.cloneNode(true));
		this.#slot = this.shadowRoot.querySelector('slot');
		this.#list = this.shadowRoot.querySelector('navigation');
	}
}
