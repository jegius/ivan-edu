import {html} from 'lit-html';
import './footer-section-link-component.js';
import './footer-section-link-component.template.js';
import './footer-section-link-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionLinkComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-link-component></footer-section-link-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};