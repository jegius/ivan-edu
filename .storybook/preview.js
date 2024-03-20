/** @type { import('@storybook/web-components').Preview } */
import {ButtonComponent} from '../src/components/button/button-component';
import {LinkComponent} from '../src/components/link/link-component';
import {
	HeaderNavComponent,
} from '../src/components/header-nav/header-nav-component';
import {LogoComponent} from '../src/components/logo/logo-component';
import {
	HeaderLineWrapperComponent,
} from '../src/components/header-line-wrapper/header-line-wrapper-component';
import {
	LineWrapperComponent,
} from '../src/components/line-wrapper/line-wrapper-component';
import {HeaderComponent} from '../src/components/header/header-component';
import {
	HeroSectionTitleComponent,
} from '../src/components/hero-section-title/hero-section-title-component';
import {
	HeroSectionImageFaceComponent,
} from '../src/components/hero-section-image-face/hero-section-image-face-component';
import {
	HeroSectionParagraphComponent,
} from '../src/components/hero-section-paragraph/hero-section-paragraph-component';
import {
	HeroSectionLineWrapperComponent,
} from '../src/components/hero-section-line-wrapper/hero-section-line-wrapper-component';
import {
	HeroSectionAddressComponent,
} from '../src/components/hero-section-address/hero-section-address-component';
import {
	HeroSectionAddressItemComponent,
} from '../src/components/hero-section-address-item/hero-section-address-item-component';
import {
	HeroSectionComponent,
} from '../src/components/hero-section/hero-section-component';
import {
	HeroSectionCartComponent,
} from '../src/components/hero-section-cart/hero-section-cart-component';
import {
	SectionLineComponent,
} from '../src/components/section-line/section-line-component';
import {
	AboutSectionComponent,
} from '../src/components/about-section/about-section-component';
import {
	AboutSectionCartComponent,
} from '../src/components/about-section-cart/about-section-cart-component';
import {
	SectionTitleComponent,
} from '../src/components/section-title/section-title-component';
import {
	SectionTitleSlimComponent,
} from '../src/components/section-title-slim/section-title-slim-component';
import {
	AboutSectionParagraphComponent,
} from '../src/components/about-section-paragraph/about-section-paragraph-component';
import {
	ServiceSectionItemComponent,
} from '../src/components/service-section-item/service-section-item-component';
import {
	ServiceSectionContentComponent,
} from '../src/components/service-section-content/service-section-content-component';
import {
	TechSectionSpecElemComponent,
} from '../src/components/tech-section-spec-elem/tech-section-spec-elem-component';
import {
	TechSectionButtonComponent,
} from '../src/components/tech-section-button/tech-section-button-component';
import {
	TechSectionLineComponent,
} from '../src/components/tech-section-line/tech-section-line-component';
import {
	TechSectionLineItemComponent,
} from '../src/components/tech-section-line-item/tech-section-line-item-component';
import {
	TechSectionComponent,
} from '../src/components/tech-section/tech-section-component';
import {
	ServiceSectionComponent,
} from '../src/components/service-section/service-section-component';
import {
	ProcessSectionComponent,
} from '../src/components/process-section/process-section-component';
import {
	ProcessSectionCircleLineComponent,
} from '../src/components/process-section-circle-line/process-section-circle-line-component';
import {
	ProcessSectionCircleComponent,
} from '../src/components/process-section-circle/process-section-circle-component';
import {
	ProcessSectionTextLineComponent,
} from '../src/components/process-section-text-line/process-section-text-line-component';
import {
	OptinSectionComponent,
} from '../src/components/optin-section/optin-section-component';
import {
	FooterSectionLinkComponent,
} from '../src/components/footer-section-link/footer-section-link-component';
import {
	FooterSectionNavUlComponent,
} from '../src/components/footer-section-nav-ul/footer-section-nav-ul-component';
import {
	FooterSectionSocItemComponent,
} from '../src/components/footer-section-soc-item/footer-section-soc-item-component';
import {
	FooterSectionSocWrapperComponent,
} from '../src/components/footer-section-soc-wrapper/footer-section-soc-wrapper-component';
import {
	FooterSectionSocializeComponent,
} from '../src/components/footer-section-socialize/footer-section-socialize-component';
import {
	FooterSectionComponent,
} from '../src/components/footer-section/footer-section-component';
import {MainComponent} from '../src/components/main/main-component';
import {
	HeroSectionAddressItemImageComponent,
} from '../src/components/hero-section-address-item-image/hero-section-address-item-image-component';
import {
	OptinSectionInputComponent,
} from '../src/components/optin-section-input/optin-section-input-component';

const preview = {
	parameters: {
		actions: {argTypesRegex: '^on[A-Z].*'},
		backgrounds: {
			default: 'site',
			values: [
				{
					name: 'site',
					value: '#302C42FF',
				},
				{
					name: 'gray',
					value: '#808080',
				},
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};


[
	ButtonComponent,
	LinkComponent,
	HeaderNavComponent,
	LogoComponent,
	LineWrapperComponent,
	HeaderLineWrapperComponent,
	HeaderComponent,
	HeroSectionTitleComponent,
	HeroSectionImageFaceComponent,
	HeroSectionParagraphComponent,
	HeroSectionLineWrapperComponent,
	HeroSectionAddressComponent,
	HeroSectionAddressItemComponent,
	HeroSectionAddressItemImageComponent,
	HeroSectionComponent,
	HeroSectionCartComponent,
	SectionLineComponent,
	AboutSectionComponent,
	AboutSectionCartComponent,
	SectionTitleComponent,
	SectionTitleSlimComponent,
	AboutSectionParagraphComponent,
	ServiceSectionItemComponent,
	ServiceSectionContentComponent,
	TechSectionSpecElemComponent,
	TechSectionButtonComponent,
	TechSectionLineComponent,
	TechSectionLineItemComponent,
	TechSectionComponent,
	ServiceSectionComponent,
	ProcessSectionComponent,
	ProcessSectionCircleLineComponent,
	ProcessSectionCircleComponent,
	ProcessSectionTextLineComponent,
	OptinSectionInputComponent,
	OptinSectionComponent,
	FooterSectionLinkComponent,
	FooterSectionNavUlComponent,
	FooterSectionSocItemComponent,
	FooterSectionSocWrapperComponent,
	FooterSectionSocializeComponent,
	FooterSectionComponent,
	MainComponent,
].map((component) => customElements.define(component.name, component));
export default preview;