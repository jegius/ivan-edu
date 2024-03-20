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
		<style>
			@import url(../common.css);

			li {
				list-style-type: none;
			}

			.header__nav {
				display: flex;
				gap: 2.75rem;
			}

			.header__nav-item {
				text-decoration: none;
				border-top: .1rem solid var(--nav-item-bordr);
			}

			.header__nav-item:not(._active)::after {
				position: absolute;
				margin-left: .25rem;
				bottom: 4.6rem;
				border-radius: 10rem;
				background-color: var(--lightest-violet);
				content: "";
				height: .5rem;
				width: .5rem;
				transform: scale(0);
				transition: transform .2s ease-in-out;
			}

			._active {
				border-bottom: .1rem solid var(--nav-item-bordr_active);
			}

			.header__nav-item:hover:after {
				transform: scale(1);
			}

			.font-weight-700 {
				font-weight: 700;
			}

			._font-size-12px {
				font-size: 12px;
			}

		</style>
		<header-nav-component>
			<link-component class='header__nav-item' is-active='true' text='ABOUT' styles='nav' href='#ABOUT'></link-component>
			<link-component class='header__nav-item' is-active='false' text='SERVICES' styles='nav' href='#SERVICES'></link-component>
			<link-component class='header__nav-item' is-active='false' text='TECHNOLOGIES' styles='nav' href='#TECHNOLOGIES'></link-component>
			<link-component class='header__nav-item' is-active='false' text='HOW TO' styles='nav' href='#HOW-TO'></link-component>
		</header-nav-component>
	`;
};

const TemplateWithScrollDetection = () => {
	return html`
		<style>
			@import url(../common.css);

			li {
				list-style-type: none;
			}

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
				height: 50rem;
				padding: 0 2rem;
				overflow-y: scroll;
			}

			.header__nav {
				display: flex;
				gap: 2.75rem;
			}

			.header__nav-item:not(._active)::after {
				position: absolute;
				margin-left: .25rem;
				bottom: 4.6rem;
				border-radius: 10rem;
				background-color: var(--lightest-violet);
				content: "";
				height: .5rem;
				width: .5rem;
				transform: scale(0);
				transition: transform .2s ease-in-out;
			}

			._active {
				border-bottom: .1rem solid var(--nav-item-bordr_active);
			}
		</style>
		<div class='wrapper _scrollable'>
			<div class='header'>
				<header-nav-component>
					<link-component class='header__nav-item' is-active='true' text='01' styles='nav' href='#first'></link-component>
					<link-component class='header__nav-item' is-active='false' text='02' styles='nav' href='#second'></link-component>
					<link-component class='header__nav-item' is-active='false' text='03' styles='nav' href='#third'></link-component>
					<link-component class='header__nav-item' is-active='false' text='04' styles='nav' href='#fourth'></link-component>
					<link-component class='header__nav-item' is-active='false' text='05' styles='nav' href='#fifth'></link-component>
					<link-component class='header__nav-item' is-active='false' text='06' styles='nav' href='#sixth'></link-component>
					<link-component class='header__nav-item' is-active='false' text='07' styles='nav' href='#seventh'></link-component>
					<link-component class='header__nav-item' is-active='false' text='08' styles='nav' href='#eighth'></link-component>
				</header-nav-component>
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