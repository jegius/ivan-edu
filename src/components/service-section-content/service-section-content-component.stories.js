import {html} from 'lit-html';
import './service-section-content-component.js';
import './service-section-content-component.template.js';
import './service-section-content-component.styles.js';
import '../common.css';

export default {
	title: 'ServiceSectionContentComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<service-section-content-component></service-section-content-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',

};