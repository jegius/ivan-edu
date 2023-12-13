import {html} from 'lit-html';
import './header-logo-component.js';
import './header-logo-component.template.js';
import './header-logo-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderLogoComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<header-logo-component></header-logo-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};