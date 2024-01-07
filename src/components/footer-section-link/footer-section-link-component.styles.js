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
	
	.footer__link {
	box-shadow: var(--white);
	transition: box-shadow .3s ease-in-out;
	}
	
	.footer__link:hover {
	box-shadow: 0 0 .95rem var(--darkest-violet);
	}
	</style>
`;