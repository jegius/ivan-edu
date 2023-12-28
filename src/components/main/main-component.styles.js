export default `
	<style>
		@import url('../common.css');
		
		body {
		margin: 0;
		padding: 0;
		}
		
		.main__background-color {
		background-color: var(--darker-violet);
		}
		
		.main-font {
		font-family: Montserrat, sans-serif;
		color: var(--white);
		}
		
		.body {
		display: flex;
		justify-content: center;
		}
		
		.main {
		display: flex;
		flex-direction: column;
		gap: 4.8rem;
		max-width: 120rem;
		}
		
		.vector-image-for-hero-section-right {
		background-image: var(--hero-vector_right);
		background-position: right 8rem top;
		background-repeat: no-repeat;
		background-size: 50rem;
		}
	</style>
`;