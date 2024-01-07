export default `
<style>
	@import url('../common.css');

	.hero-section__address {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5.625rem;
    background: var(--address-gradient);
    box-shadow: 0 .25rem .25rem 0 var(--address-shadow);
    min-height: 10.438rem;
    gap: 0 2.66rem;
    flex-wrap: wrap;
	}

	.address-vector {
    background: var(--address-vector) no-repeat;
    min-width: .0625rem;
    min-height: 7.28125rem;
	}
</style>
`;