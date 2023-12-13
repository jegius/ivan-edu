import {html} from 'lit-html';
import './header-nav-item-component.js';
import {HeaderNavItemComponent} from './header-nav-item-component.js';
import './header-nav-item-component.template.js';
import './header-nav-item-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderNavItemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<header-nav-item-component></header-nav-item-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};