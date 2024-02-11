import {html} from 'lit-html';
import './process-section-text-line-component.js';
import './process-section-text-line-component.template.js';
import './process-section-text-line-component.styles.js';
import '../common.css';

export default {
	title: 'ProcessSectionTextLineComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<process-section-text-line-component></process-section-text-line-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};