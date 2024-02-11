import {html} from 'lit-html';
import './service-section-component.js';
import './service-section-component.template.js';
import './service-section-component.styles.js';
import '../common.css';

export default {
	title: 'ServiceSectionComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<service-section-component></service-section-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};