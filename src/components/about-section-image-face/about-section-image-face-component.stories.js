import {html} from 'lit-html';
import './about-section-image-face-component.js';
import './about-section-image-face-component.template.js';
import './about-section-image-face-component.styles.js';
import '../common.css';

export default {
	title: 'AboutSectionImageFace',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<about-section-image-face-component></about-section-image-face-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
// 	чтоб работали вариации - надо менять темплейст скорее всего
};