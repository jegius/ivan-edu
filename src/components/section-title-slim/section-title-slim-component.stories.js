import {html} from 'lit-html';
import './section-title-slim-component.js';
import './section-title-slim-component.template.js';
import './section-title-slim-component.styles.js';
import '../common.css';

export default {
	title: 'SectionTitleSlimComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<section-title-slim-component></section-title-slim-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};