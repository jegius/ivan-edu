import {html} from 'lit-html';
import './tech-section-button-component.js';
import './tech-section-button-component.template.js';
import './tech-section-button-component.styles.js';
import '../common.css';

export default {
	title: 'TechSectionButtonComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<tech-section-button-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};