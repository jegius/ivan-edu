import {html} from 'lit-html';
import './service-section-item-component.js';
import './service-section-item-component.template.js';
import './service-section-item-component.styles.js';
import '../common.css';

export default {
	title: 'ServiceSectionItemComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<service-section-item-component></service-section-item-component>
	`;
};

export const Default = Template.bind({});
Default.args = {
	variant: 'primary',
};