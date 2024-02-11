import {html} from 'lit-html';
import './about-section-cart-component.js';
import './about-section-cart-component.template.js';
import './about-section-cart-component.styles.js';
import '../common.css';

export default {
	title: 'AboutSectionCartComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<about-section-cart-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};