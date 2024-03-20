import {html} from 'lit-html';
import './link-component.js';
import './link-component.template.js';
import './link-component.styles.js';
import '../common.css';
import events from '../api/events.js';
import {action} from '@storybook/addon-actions';
import {LinkComponent} from './link-component.js';

export default {
	title: 'LinkComponent',
	tags: ['autodocs'],
	argTypes: {
		onClick: {action: 'clicked'},
		linkText: {control: 'text'},
		href: {control: 'text'},
		isActive: {
			control: {type: 'boolean'},
			options: ['true', 'false'],
		},
	},
};

const Template = (args) => {
	document.addEventListener(events.LINK_CLICKED, action(events.LINK_CLICKED));
	return html`
		<link-component text='${args.linkText}' is-active='${args.isActive}' href='${args.href}'></link-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	isActive: 'false',
	linkText: 'Link text',
	href: '#',
};