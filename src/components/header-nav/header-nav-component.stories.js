import {html} from 'lit-html';
import './header-nav-component.js';
import './header-nav-component.template.js';
import './header-nav-component.styles.js';
import '../common.css';

export default {
	title: 'HeaderNavComponent',
	tags: ['autodocs'],
};

const Template = () => {
	return html`
		<header-nav-component>
			<link-component is-active='true' text='Hero' href='#Hero'></link-component>
			<link-component is-active='false' text='About' href='#About'></link-component>
			<link-component is-active='false' text='Service' href='#Service'></link-component>
			<link-component is-active='false' text='Tech' href='#Tech'></link-component>
			<link-component is-active='false' text='Process' href='#Process'></link-component>
			<link-component is-active='false' text='Optin' href='#Optin'></link-component>
			<link-component is-active='false' text='Footer' href='#Footer'></link-component>
		</header-nav-component>
	`;
};

const TemplateWithScrollDetection = () => {
	return html`
		<style>
			@import url(../common.css);

			.header {
				width: 100%;
				position: sticky;
				top: 0;
				z-index: 2;
			}

			.section {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 144px;
				font-weight: 700;
				color: var(--darker-violet);
				background: var(--button-gradient);
				height: 40rem;
				border: .125rem solid white;
				border-radius: 2.5rem;
				margin-top: 1rem;
			}

			.section:nth-child(odd) {
				background: var(--service-gradient);
				color: white;
			}

			.wrapper {
				position: relative;
				height: 40rem;
				padding: 0 2rem;
				overflow-y: scroll;
			}
		</style>
		<div class='wrapper _scrollable'>
			<div class='header'>
				<navigation-component>
					<link-component is-active='true' text='01' styles='nav' href='#first'></link-component>
					<link-component is-active='false' text='02' styles='nav' href='#second'></link-component>
					<link-component is-active='false' text='03' styles='nav' href='#third'></link-component>
					<link-component is-active='false' text='04' styles='nav' href='#fourth'></link-component>
					<link-component is-active='false' text='05' styles='nav' href='#fifth'></link-component>
					<link-component is-active='false' text='06' styles='nav' href='#sixth'></link-component>
					<link-component is-active='false' text='07' styles='nav' href='#seventh'></link-component>
					<link-component is-active='false' text='08' styles='nav' href='#eighth'></link-component>
				</navigation-component>
			</div>
			<div class='section' id='first'>
				<span>first</span>
			</div>
			<div class='section' id='second'>
				<span>second</span>
			</div>
			<div class='section' id='third'>
				<span>third</span>
			</div>
			<div class='section' id='fourth'>
				<span>fourth</span>
			</div>
			<div class='section' id='fifth'>
				<span>fifth</span>
			</div>
			<div class='section' id='sixth'>
				<span>sixth</span>
			</div>
			<div class='section' id='seventh'>
				<span>seventh</span>
			</div>
			<div class='section' id='eighth'>
				<span>eighth</span>
			</div>
	`;
};

export const Default = Template.bind({});

export const WithScrollDetection = TemplateWithScrollDetection.bind({});