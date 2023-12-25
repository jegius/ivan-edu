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

.optin-section__pulls-border {
    color: var(--white);
    border-radius: 2.5rem;
    border: .125rem solid var(--white);
    padding: 2rem 0 2rem 2.62rem;
}

.optin-section__pulls-border::placeholder {
    color: var(--white);
    font-family: Montserrat, sans-serif;
    font-weight: 400;
}

.optin-section__input_small {
    padding-right: 20rem;
    max-width: 30.13rem;
    max-height: 4.5rem;
    flex-grow: 1;
}

</style>
`;