import {html} from 'lit-html';
import './main-component.js';
import './main-component.template.js';
import './main-component.styles.js';
import '../common.css';

export default {
	title: 'MainComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<main-component></main-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};