import {html} from 'lit-html';
import './optin-section-input-component.js';
import './optin-section-input-component.template.js';
import './optin-section-input-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionInputComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-input-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};