import {html} from 'lit-html';
import './footer-section-soc-wrapper-component.js';
import './footer-section-soc-wrapper-component.template.js';
import './footer-section-soc-wrapper-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionSocWrapperComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-soc-wrapper-component></footer-section-soc-wrapper-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};