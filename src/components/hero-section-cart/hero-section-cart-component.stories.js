import {html} from 'lit-html';
import './hero-section-cart-component.js';
import './hero-section-cart-component.template.js';
import './hero-section-cart-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionCartComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-cart-component></hero-section-cart-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};