export default `
	<style>
		@import url('../common.css');
		
		.service-section__item {
			 padding: 1.56rem;
			 display: flex;
			 justify-content: end;
			 gap: 1rem 0;
			 align-items: center;
			 flex-direction: column;
			 max-width: 16.375rem;
			 min-height: 27.93rem;
			 border-radius: 2.5rem;
		}
		
		.service-image-background {
			 background: center top 1.5rem / 13.6875rem no-repeat, center / 100% no-repeat;
		}
		
		.service-image_SIMULATION {
			 background-image: var(--service-SIMULATION), var(--service-gradient);
		}
		
		.service-section__hr {
			 background: var(--service-vector-hr);
			 background-size: 9.62rem;
			 min-height: .1rem;
			 min-width: 9.62rem;
			 border: none;
		}
		
		.item-title {
			 font-size: 24px;
		}
		
		.font-weight-700 {
			 font-weight: 700;
		}
		
		._font-size-12px {
			 font-size: 12px;
		}
	</style>
`;