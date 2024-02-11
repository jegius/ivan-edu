import {html} from 'lit-html';
import './tech-section-line-item-component.js';
import './tech-section-line-item-component.template.js';
import './tech-section-line-item-component.styles.js';
import '../common.css';

export default {
	title: 'TechSectionLineItemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<tech-section-line-item-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};