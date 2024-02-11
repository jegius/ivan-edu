import {html} from 'lit-html';
import './tech-section-line-component.js';
import './tech-section-line-component.template.js';
import './tech-section-line-component.styles.js';
import '../common.css';

export default {
	title: 'TechSectionLineComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<tech-section-line-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};