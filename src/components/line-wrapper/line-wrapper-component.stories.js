import {html} from 'lit-html';
import './line-wrapper-component.js';
import './line-wrapper-component.template.js';
import './line-wrapper-component.styles.js';
import '../common.css';

export default {
	title: 'LineWrapperComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<line-wrapper-component></line-wrapper-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};