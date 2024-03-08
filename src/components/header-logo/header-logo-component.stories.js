import {html} from 'lit-html';
import './header-logo-component.js';
import './header-logo-component.template.js';
import './header-logo-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderLogoComponent',
	tags: ['autodocs'],
	argTypes: {
		logoSize: {
			control: {type: 'select'},
			options: ['small', 'medium', 'large'],
		},
		withText: {
			control: {type: 'boolean'},
			options: ['true', 'false'],
		},
	},
};

const Template = (args) => {
	return html`
		<header-logo-component with-text='${args.withText}' size='${args.logoSize}'></header-logo-component>
	`;
};

export const Default = Template.bind({});

Default.args = {
	logoSize: 'medium',
	withText: 'true',
};

export const withoutText = Template.bind({});

withoutText.args = {
	...Default.args,
	withText: 'false',
};