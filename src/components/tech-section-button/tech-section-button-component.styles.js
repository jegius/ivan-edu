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

.tech-section__button {
    background: var(--tech-button) no-repeat;
    background-size: 6.25rem;
    max-width: 6.25rem;
    min-height: 6.25rem;
    border-radius: 10rem;
    cursor: pointer;
    margin-top: 1.4rem;
    box-shadow: 0;
    transform: scale(1);
}

.tech-section__button:hover {
    transform: scale(.97);
    box-shadow: 0 0 .95rem var(--button-hover);
}

.transition-for-regular-hover {
    transition: transform .2s ease-in-out, box-shadow .2s ease-in-out;
}

</style>
`;