export default `
	<style>
		@import url('../common.css');
		
		.footer__hr {
			background: var(--footer-hr) no-repeat;
			background-size: 100%;
			min-width: auto;
			min-height: 1rem;
		}
		
		.footer__line-vector-border {
			background: var(--footer-vector) no-repeat;
			background-size: .5rem 12.25rem;
			min-height: 12.25rem;
			min-width: .5rem;
		}
		
		.footer__back-image {
			background: var(--footer-back) bottom 8rem left 7rem no-repeat;
			background-size: 119rem 39rem;
		}
		
		.footer__line {
			justify-content: center;
			margin-top: 8.12rem;
			display: flex;
			gap: 8.7rem;
			flex-wrap: wrap;
		}
		
		.footer__line-logo-img {
			background: var(--logo-icon) no-repeat;
			background-size: 11.5625rem;
			filter: drop-shadow(0 .625rem .375rem var(--shadow));
			min-width: 11.5625rem;
			min-height: 11.6875rem;
		}
		
		.section {
			padding: 0 5.25rem;
			display: flex;
			flex-direction: column;
			gap: 5.5rem;
		}
		
		.font-weight-700 {
			font-weight: 700;
		}
	</style>
`;