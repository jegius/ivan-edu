import {html} from 'lit-html';
import './header-nav-component.js';
import './header-nav-component.template.js';
import './header-nav-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderNavComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<header-nav-component></header-nav-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};