import {html} from 'lit-html';
import './credits-component.js';
import './credits-component.template.js';
import './credits-component.styles.js';
import '../common.css';

export default {
	title: 'CreditsComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<credits-component></credits-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};