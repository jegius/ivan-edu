import {html} from 'lit-html';
import './section-title-component.js';
import './section-title-component.template.js';
import './section-title-component.styles.js';
import '../common.css';

export default {
	title: 'SectionTitleComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<section-title-component></section-title-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};