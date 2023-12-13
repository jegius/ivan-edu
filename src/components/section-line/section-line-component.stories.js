import {html} from 'lit-html';
import './section-line-component.js';
import './section-line-component.template.js';
import './section-line-component.styles.js';
import '../common.css';

export default {
	title: 'SectionLinerComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<section-line-component></section-line-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};