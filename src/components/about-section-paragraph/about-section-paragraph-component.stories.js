import {html} from 'lit-html';
import './about-section-paragraph-component.js';
import './about-section-paragraph-component.template.js';
import './about-section-paragraph-component.styles.js';
import '../common.css';

export default {
	title: 'AboutSectionParagraphComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<about-section-paragraph-component></about-section-paragraph-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};