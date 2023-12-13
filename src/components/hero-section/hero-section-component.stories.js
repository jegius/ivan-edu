import {html} from 'lit-html';
import './hero-section-component.js';
import './hero-section-component.template.js';
import './hero-section-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-component></hero-section-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};