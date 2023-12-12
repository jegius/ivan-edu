import {html} from 'lit-html';
import './hero-section-line-wrapper-component.js';
import './hero-section-line-wrapper-component.template.js';
import './hero-section-line-wrapper-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionLineWrapperComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-line-wrapper-component></hero-section-line-wrapper-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};