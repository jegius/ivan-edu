import {html} from 'lit-html';
import './footer-section-nav-ul-component.js';
import './footer-section-nav-ul-component.template.js';
import './footer-section-nav-ul-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionNavUlComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-nav-ul-component></footer-section-nav-ul-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};