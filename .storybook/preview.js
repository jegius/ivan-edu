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
	LineWrapperComponent,
} from '../src/components/line-wrapper/line-wrapper-component';
import {HeaderComponent} from '../src/components/header/header-component';
import {
	HeroSectionTitleComponent,
} from '../src/components/hero-section-title/hero-section-title-component';
import {
	HeroSectionImageFaceComponent,
} from '../src/components/hero-section-image-face/hero-section-image-face-component';

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


[ButtonComponent, HeaderNavItemComponent, HeaderNavComponent, HeaderLogoComponent, LineWrapperComponent, HeaderComponent, HeroSectionTitleComponent, HeroSectionImageFaceComponent].map((component) => customElements.define(component.name, component));
export default preview;