import {html} from 'lit-html';
import './link-component.js';
import './link-component.template.js';
import './link-component.styles.js';
import '../common.css';

export default {
	title: 'LinkComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<link-component></link-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};