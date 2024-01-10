export default `
	<style>
		@import url('../common.css');
		
		.section {
			padding: 0 5.25rem;
			display: flex;
			flex-direction: column;
			gap: 5.5rem;
		}
		
		.section__main-content {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
		}
		
		.hero-section__back-image {
			background: var(--hero-vector_left) left top .9rem no-repeat;
			background-size: 19rem;
		}
	</style>
`;