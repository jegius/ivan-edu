export default `
	<style>
		@import url('../common.css');
		
		._no-text {
   		 background: var(--logo-icon) no-repeat;
   		 background-size: 11.5625rem;
    	  	filter: drop-shadow(0 .625rem .375rem var(--shadow));
    		 min-width: 11.5625rem;
   		 min-height: 11.6875rem;
		}
		
		.logo {
			/*min-width: min-content;*/
  			/*min-height: min-content;*/
			display: inline-block;
			background: var(--logo-icon) center left no-repeat;
			/*background-color: greenyellow;*/
			/*filter: drop-shadow(0 .625rem .375rem var(--shadow));*/
			/*cursor: pointer;*/
			
			transition: filter 300ms ease-in-out;
			box-sizing: border-box;
			background-size: 11.5625rem;
			min-width: 11.5625rem;
  		   min-height: 11.6875rem;
		}
		
		.logo:hover{
			  filter: drop-shadow(0.3rem 0.4rem 0.125rem rgba(0,0,0,0.35));
		}
		
		._with-text{
			background: var(--logo-icon) center left no-repeat, var(--logo-text) center right no-repeat;
			/*background-color: rgba(232,11,103,0.74);*/
			background-size: 6.375rem 6.4375rem, 4.75rem 2.875rem;
			display: inline-block;
			
		}
		
		._small {
			background-size: 4.375rem 4.4375rem, 3.75rem 1.875rem;
			min-width: 8.5rem;
			min-height: 4.375rem;
        }
        
        ._medium {
				background-size: 6.375rem 6.4375rem, 4.75rem 2.875rem;
				min-width: 11.5rem;
				min-height: 6.375rem;
        }
        
        ._large {
				background-size: 8.375rem 8.4375rem, 5.75rem 3.875rem;
				min-width: 15.5rem;
				min-height: 8.375rem;       
        }
        

	</style>
`;