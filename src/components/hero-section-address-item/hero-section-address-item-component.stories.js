import {html} from 'lit-html';
import './hero-section-address-item-component.js';
import './hero-section-address-item-component.template.js';
import './hero-section-address-item-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionAddressItemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-address-item-component></hero-section-address-item-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};