export default `
<style>
@import url('../common.css');

.line-wrapper {
    display: flex;
}

.line-wrapper__hover {
    gap: 0;
    transition: gap 0.2s ease-in-out;
    cursor: pointer;
}

.line-wrapper__hover:hover {
    gap: .5rem;
}

._gap-1rem {
    gap: 1rem;
}

._margin-top-1rem {
    margin-top: 1rem;
}

.hero-section__arrow {
    background: var(--arrow_small) center no-repeat;
    background-size: 6.25rem;
    min-width: 6.25rem;
    min-height: 2.8rem;
}
</style>
`;