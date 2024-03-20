export default `
	<style>
		@import url('../common.css');
		
		._no-text {
   		 background: var(--logo-icon) no-repeat;
		}
		
		.logo._small._no-text {
		  background-size: 4.3125rem;
		  width: 4.3125rem;
		  height: 4.3125rem;
		}
		
		._medium._no-text {
		  background-size: 6.375rem;
		  width: 6.375rem;
		  height: 6.375rem;
		}
		
		.logo._large._no-text {
		  background-size: 11.5625rem;
		  width: 11.5625rem;
		  height: 11.5625rem;
		}
		
		.logo {
    	  	filter: drop-shadow(0 .625rem .375rem var(--shadow));		
			display: inline-block;
			transition: filter 300ms ease-in-out;
			box-sizing: border-box;
		}
		
		.logo:hover{
			filter: drop-shadow(0.3rem 0.4rem 0.125rem rgba(0,0,0,0.35));
		}
		
		._with-text{
			background: var(--logo-icon) center left no-repeat, var(--logo-text) center right no-repeat;
			display: inline-block;
		}	
		
		._small._with-text {
			background-size:4.3125rem 4.3125rem, 3.75rem 1.875rem;
			min-width: 8.5rem;
			min-height: 4.375rem;
      }
        
      ._medium._with-text {
				background-size: 6.375rem 6.375rem, 4.75rem 2.875rem;
				min-width: 11.5rem;
				min-height: 6.375rem;
      }
        
      ._large._with-text {
				background-size: 8.375rem 8.375rem, 5.75rem 3.875rem;
				min-width: 15.5rem;
				min-height: 8.375rem;       
      }
	</style>
`;