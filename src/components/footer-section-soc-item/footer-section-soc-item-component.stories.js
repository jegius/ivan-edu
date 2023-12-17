import {html} from 'lit-html';
import './footer-section-soc-item-component.js';
import './footer-section-soc-item-component.template.js';
import './footer-section-soc-item-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionSocItemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-soc-item-component></footer-section-soc-item-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};