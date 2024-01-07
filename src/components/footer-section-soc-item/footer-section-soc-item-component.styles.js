export default `
	<style>
	@import url('../common.css');
	a {
	text-decoration: none;
	color: inherit;
	}
	
	li {
	list-style-type: none;
	}
	
	.footer__soc-item {
	width: 2rem;
	height: 2rem;
	box-shadow: 0;
	transform: scale(1);
	border-radius: 10rem;
	}
	
	.footer__soc-item:hover {
	transform: scale(.97);
	box-shadow: 0 0 .95rem var(--button-hover);
	border-radius: 10rem;
	}
	
	.footer__soc-item_background-settings {
	background-size: 2rem;
	background-repeat: no-repeat;
	}
	
	.footer__soc-item-facebook {
	background-image: var(--facebook);
	}
	
	.transition-for-regular-hover {
	transition: transform .2s ease-in-out, box-shadow .2s ease-in-out;
	}
	</style>
`;