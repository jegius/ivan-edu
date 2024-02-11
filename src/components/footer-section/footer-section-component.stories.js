import {html} from 'lit-html';
import './footer-section-component.js';
import './footer-section-component.template.js';
import './footer-section-component.styles.js';
import '../common.css';

export default {
	title: 'FooterSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<footer-section-component></footer-section-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};