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


[ButtonComponent, HeaderNavItemComponent, HeaderNavComponent, HeaderLogoComponent].map((component) => customElements.define(component.name, component));
export default preview;