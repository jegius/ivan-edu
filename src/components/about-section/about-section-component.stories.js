import {html} from 'lit-html';
import './about-section-component.js';
import './about-section-component.template.js';
import './about-section-component.styles.js';
import '../common.css';

export default {
	title: 'AboutSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<about-section-component></about-section-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};