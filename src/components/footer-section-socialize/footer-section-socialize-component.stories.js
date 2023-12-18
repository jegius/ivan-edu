import {html} from 'lit-html';
import './footer-section-socialize-component.js';
import './footer-section-socialize-component.template.js';
import './footer-section-socialize-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionSocializeComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-socialize-component></footer-section-socialize-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};