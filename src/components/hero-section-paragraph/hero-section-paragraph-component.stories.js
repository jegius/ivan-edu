import {html} from 'lit-html';
import './hero-section-paragraph-component.js';
import './hero-section-paragraph-component.template.js';
import './hero-section-paragraph-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionParagraphComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-paragraph-component></hero-section-paragraph-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};