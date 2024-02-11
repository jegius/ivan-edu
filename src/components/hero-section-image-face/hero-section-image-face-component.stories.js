import {html} from 'lit-html';
import './hero-section-image-face-component.js';
import './hero-section-image-face-component.template.js';
import './hero-section-image-face-component.styles.js';
import '../common.css';

export default {
	title: 'HeroSectionImageFace',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<hero-section-image-face-component></hero-section-image-face-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};