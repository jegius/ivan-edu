import {html} from 'lit-html';
import './header-line-wrapper-component.js';
import './header-line-wrapper-component.template.js';
import './header-line-wrapper-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderLineWrapperComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<header-line-wrapper-component></header-line-wrapper-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};