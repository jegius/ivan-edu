	export default `
		<style>
			@import url('../common.css');
			
			.section__title {
				 font-size: 36px;
				 line-height: normal;
				 white-space: nowrap;
			}
			
			.section__title_hero {
				 font-size: 46px;
			}
			
			.hero-section__span {
				 -webkit-text-fill-color: transparent;
			}
			
			.hero-section__span_grad-92deg {
				 background: var(--hero-span-gradient_92deg);
				 -webkit-background-clip: text;
			}
			
			.hero-section__span_grad-269deg {
				 background: var(--hero-span-gradient_269deg);
				 -webkit-background-clip: text;
			}		

			.main-font {
				font-family: Montserrat, sans-serif;
				color: var(--white);
			}
		</style>
	`;