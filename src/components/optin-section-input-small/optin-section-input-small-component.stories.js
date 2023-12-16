import {html} from 'lit-html';
import './optin-section-input-small-component.js';
import './optin-section-input-small-component.template.js';
import './optin-section-input-small-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionInputSmallComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-input-small-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};