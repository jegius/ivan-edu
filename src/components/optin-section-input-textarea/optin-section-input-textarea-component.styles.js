export default `
	<style>
		@import url('../common.css');
		
		textarea {
			 box-sizing: border-box;
			 height: auto;
			 resize: none;
			 border: none;
			 outline: none;
			 background-color: transparent;
			 font-family: inherit;
			 padding: 0;
			 margin: 0;
		}
		
		.optin-section__input_textarea {
			 width: 100%;
			 height: 100%;
			 min-height: 10rem;
			 max-height: 13.125rem;
			 flex-grow: 2;
		}
		
		.optin-section__pulls-border {
			 color: var(--white);
			 border-radius: 2.5rem;
			 border: .125rem solid var(--white);
			 padding: 2rem 0 2rem 2.62rem;
		}
		
		.optin-section__pulls-border::placeholder {
			 color: var(--white);
			 font-family: Montserrat, sans-serif;
			 font-weight: 400;
		}	
	</style>
`;