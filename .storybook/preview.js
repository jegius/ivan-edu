/** @type { import('@storybook/web-components').Preview } */
import {ButtonComponent} from '../src/components/button/button-component';
import {
	HeaderNavItemComponent,
} from '../src/components/header-nav-item/header-nav-item-component';
import {
	HeaderNavComponent,
} from '../src/components/header-nav/header-nav-component';
import {
	HeaderLogoComponent,
} from '../src/components/header-logo/header-logo-component';
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

const preview = {
	parameters: {
		actions: {argTypesRegex: '^on[A-Z].*'},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};


[ButtonComponent, HeaderNavItemComponent, HeaderNavComponent, HeaderLogoComponent, LineWrapperComponent, HeaderLineWrapperComponent, HeaderComponent, HeroSectionTitleComponent, HeroSectionImageFaceComponent, HeroSectionParagraphComponent, HeroSectionLineWrapperComponent, HeroSectionAddressComponent, HeroSectionAddressItemComponent, HeroSectionComponent, HeroSectionCartComponent].map((component) => customElements.define(component.name, component));
export default preview;