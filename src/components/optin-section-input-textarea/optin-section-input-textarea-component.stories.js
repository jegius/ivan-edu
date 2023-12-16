import {html} from 'lit-html';
import './optin-section-input-textarea-component.js';
import './optin-section-input-textarea-component.template.js';
import './optin-section-input-textarea-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionInputTextareaComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-input-textarea-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};