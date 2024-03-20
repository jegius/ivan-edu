import {html} from 'lit-html';
import './logo-component.js';
import './logo-component.template.js';
import './logo-component.styles.js';
import '../common.css';

export default {
	title: 'LogoComponent',
	tags: ['autodocs'],
	argTypes: {
		logoSize: {
			control: {type: 'select'},
			options: ['small', 'medium', 'large'],
		},
		href: {control: 'text'},
		withText: {
			control: {type: 'boolean'},
			options: ['true', 'false'],
		},
	},
};

const Template = (args) => {
	return html`
		<logo-component with-text='${args.withText}' size='${args.logoSize}' href='${args.href}'></logo-component>
	`;
};

export const Default = Template.bind({});

Default.args = {
	logoSize: 'medium',
	withText: 'true',
	href: '#',
};

export const withoutText = Template.bind({});

withoutText.args = {
	...Default.args,
	withText: 'false',
};