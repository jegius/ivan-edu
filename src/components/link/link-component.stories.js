import {html} from 'lit-html';
import './link-component.js';
import './link-component.template.js';
import './link-component.styles.js';
import '../common.css';

export default {
	title: 'LinkComponent',
	tags: ['autodocs'],
	argTypes: {
		onClick: {action: 'clicked'},
		Text: {control: 'text'},
		href: {control: 'text'},
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
	linkText: 'item text',
	href: '#',
};