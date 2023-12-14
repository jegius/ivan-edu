import {html} from 'lit-html';
import './tech-section-spec-elem-component.js';
import './tech-section-spec-elem-component.template.js';
import './tech-section-spec-elem-component.styles.js';
import '../common.css';

export default {
	title: 'TechSectionSpecElemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<tech-section-spec-elem-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};