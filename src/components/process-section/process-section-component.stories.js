import {html} from 'lit-html';
import './process-section-component.js';
import './process-section-component.template.js';
import './process-section-component.styles.js';
import '../common.css';

export default {
	title: 'ProcessSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<process-section-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};