export default `
	<style>
		@import url('../common.css');
		
		.section__line {
			 display: flex;
			 gap: 1.5rem;
			 flex-wrap: wrap;
			 justify-content: space-around;
		}
		
		.section-line__paragraph {
			 max-width: 40.75rem;
		}
		
		.line-wrapper {
			 display: flex;
		}
		
		.section__title {
			 font-size: 36px;
		}
		
		._gap-1rem {
			 gap: 1rem;
		}
		
		.section__title_slim {
			 font-weight: 300;
		}
		
		.arrow-big {
			 background: var(--arrow_big) bottom 2.7rem left no-repeat;
			 background-size: 14rem 6.25rem;
			 min-width: 20.25rem;
			 min-height: 7.25rem;
		}
	</style>
`;