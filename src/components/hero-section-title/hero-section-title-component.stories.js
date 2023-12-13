import {html} from 'lit-html';
import './hero-section-title-component.js';
import './hero-section-title-component.template.js';
import './hero-section-title-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionTitleComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-title-component></hero-section-title-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};