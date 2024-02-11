import {html} from 'lit-html';
import './process-section-circle-line-component.js';
import './process-section-circle-line-component.template.js';
import './process-section-circle-line-component.styles.js';
import '../common.css';

export default {
	title: 'ProcessSectionCircleLineComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<process-section-circle-line-component></process-section-circle-line-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};