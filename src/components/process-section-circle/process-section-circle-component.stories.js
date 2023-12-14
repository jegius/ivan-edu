import {html} from 'lit-html';
import './process-section-circle-component.js';
import './process-section-circle-component.template.js';
import './process-section-circle-component.styles.js';
import '../common.css';

export default {
	title: 'ProcessSectionCircleComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<process-section-circle-component></process-section-circle-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};