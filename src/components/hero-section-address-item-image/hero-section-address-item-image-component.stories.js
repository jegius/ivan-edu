import {html} from 'lit-html';
import './hero-section-address-item-image-component.js';
import './hero-section-address-item-image-component.template.js';
import './hero-section-address-item-image-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionAddressItemImageComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-address-item-image-component></hero-section-address-item-image-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};