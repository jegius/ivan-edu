import {html} from 'lit-html';
import './optin-section-input-big-component.js';
import './optin-section-input-big-component.template.js';
import './optin-section-input-big-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionInputBigComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-input-big-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};