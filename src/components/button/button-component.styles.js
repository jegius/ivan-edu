export default `
	<style>
		@import url('../common.css');
		
		input {
			margin: 0;
			padding: 0;
			border: none;
			outline: none;
			background: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			appearance: none;
		}
		
		button {
			border: none;
		}
		
		.button {
			border-radius: 2.5rem;
			cursor: pointer;
			padding: 1rem 2.1rem;
			transition: transform 
			.2s ease-in-out, box-shadow .2s ease-in-out;
			max-height: 3rem;
			box-shadow: 0 0 0 0;
			transform: scale(1);
		}
		
		.button:hover {
			transform: scale(.97);
			box-shadow: 0 0 .95rem var(--button-hover);
		}
				  
		.button_contact {
			border: .125rem solid var(--white);
			color: var(--white);
		}
		
		.button_light {
			color: var(--darker-violet);
			background: var(--button-gradient) no-repeat;
		}
		
		._small {
            padding: .7rem 1.2rem;
            font-weight: 400;
        }
       
      ._medium {
				max-width: 13.375rem;
            padding: 1rem 2.1rem;
            font-size: 14px;
            font-weight: 700;
        }

      ._large {
				border-radius: 3rem;
            padding: 1.5rem 2rem;
            font-size: 34px;
            font-weight: 900;
				max-height: 6rem;            
        }

	</style>
`;