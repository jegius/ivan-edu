import {html} from 'lit-html';
import './optin-section-pulls-wrapper-component.js';
import './optin-section-pulls-wrapper-component.template.js';
import './optin-section-pulls-wrapper-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionPullsWrapperComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-pulls-wrapper-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};