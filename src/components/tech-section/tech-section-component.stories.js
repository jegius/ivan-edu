import {html} from 'lit-html';
import './tech-section-component.js';
import './tech-section-component.template.js';
import './tech-section-component.styles.js';
import '../common.css';

export default {
	title: 'TechSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<tech-section-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};