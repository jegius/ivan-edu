import {html} from 'lit-html';
import './hero-section-address-component.js';
import './hero-section-address-component.template.js';
import './hero-section-address-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionAddressComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-address-component></hero-section-address-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};