export default `
	<style>
		@import url('../common.css');
				
		.optin-section {
			 display: flex;
			 flex-direction: column;
			 padding: 5.62rem 0 5.25rem 0;
			 border-radius: 6.25rem;
			 background: var(--optin-gradient);
			 box-shadow: 0 .25rem .25rem 0 var(--shadow);
			 margin: 0 5.25rem;
			 gap: 1.22rem;
			 max-width: 88rem;
			 text-align: center;
			 align-items: center;
			 width: 100%;
		}
		
		.optin-section__vector-hr {
			 background: var(--optin-vector_hr) no-repeat;
			 background-size: 25.875rem;
			 min-height: 1rem;
			 min-width: 25.875rem;
			 margin-top: 1.18rem auto 0;
		}
		
		._gap-1rem {
			 gap: 1rem;
		}
		
		._padding-top-2rem {
			 padding-top: 2rem;
		}
		
		.optin-section__pulls-wrapper {
			 display: flex;
			 flex-wrap: wrap;
			 width: 100%;
			 max-width: 77rem;
		}
</style>
`;