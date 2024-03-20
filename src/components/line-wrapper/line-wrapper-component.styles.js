export default `
	<style>
		@import url('../common.css');
		
		.line-wrapper {
			 display: flex;
			 gap: 1rem;
		}
		
		._active._transparent {
			border: .125rem solid var(--white);
			color: var(--white);
        }
        
      ._active._light {
			color: var(--darker-violet);
			background: var(--button-gradient) no-repeat;
        }
	</style>
`;