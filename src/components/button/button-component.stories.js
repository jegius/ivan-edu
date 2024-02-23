import {html} from 'lit-html';
import './button-component.js';
import {ButtonComponent} from './button-component.js';
import './button-component.template.js';
import './button-component.styles.js';
import '../common.css';

export default {
	title: 'ButtonComponent',
	tags: ['autodocs'],
	argTypes: {
		buttonText: {control: 'text'},
		isActive: {
			control: {type: 'boolean'},
			options: ['true', 'false'],
		},
		buttonSize: {
			control: {type: 'select'},
			options: ['small', 'medium', 'large'],
		},
		buttonColor: {
			control: {type: 'select'},
			options: ['light', 'transparent'],
		},
	},
};

const Template = (args) => {
	return html`
		<button-component text='${args.buttonText}' is-active='${args.isActive}' size='${args.buttonSize}' color='${args.buttonColor}'></button-component>
	`
		;
};

export const Default = Template.bind({});

Default.args = {
	isActive: 'true',
	buttonText: 'Button Component',
	buttonSize: 'medium',
	buttonColor: 'light',
};

export const LightColor = Template.bind({});

LightColor.args = {
	...Default.args,
	buttonText: 'light color',
};

export const TransparentColor = Template.bind({});

TransparentColor.args = {
	...Default.args,
	buttonSize: 'medium',
	buttonColor: 'transparent',
	buttonText: 'transparent color',
};

export const SmallSize = Template.bind({});

SmallSize.args = {
	...Default.args,
	buttonText: 'small size',
};

export const MediumSize = Template.bind({});

MediumSize.args = {
	...LightColor.args,
	buttonText: 'medium size',
};

export const LargeSize = Template.bind({});

LargeSize.args = {
	...Default.args,
	buttonSize: 'large',
	buttonText: 'large size',
};

export const ActiveTransparent = Template.bind({});

ActiveTransparent.args = {
	...TransparentColor.args,
	isActive: 'true',
	buttonText: 'active transparent',
};

export const ActiveLight = Template.bind({});

ActiveLight.args = {
	...LightColor.args,
	isActive: 'true',
	buttonText: 'active light',
};