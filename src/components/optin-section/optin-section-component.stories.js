import {html} from 'lit-html';
import './optin-section-component.js';
import './optin-section-component.template.js';
import './optin-section-component.styles.js';
import '../common.css';

export default {
	title: 'OptinSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<optin-section-component></optin-section-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};