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
			  font-weight: 700;
			  border-radius: 2.5rem;
			  cursor: pointer;
			  padding: 1rem 2.1rem;
			  transition: transform 
			  .2s ease-in-out, box-shadow .2s ease-in-out;
			  max-width: 13.375rem;
			  max-height: 3rem;
			  box-shadow: 0 0 0 0;
			  transform: scale(1);
		  }

		  .button:hover {
			  transform: scale(.97);
			  box-shadow: 0 0 .95rem var(--button-hover);
		  }
          </style>
`;