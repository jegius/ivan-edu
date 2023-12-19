export default `
<style>
@import url('../common.css');

body {
    margin: 0;
    padding: 0;
}

button {
    border: none;
}

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

textarea {
    box-sizing: border-box;
    height: auto;
    resize: none;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
}

h1, h2, h3, p {
    margin: 0;
    padding: 0;
}

li {
    list-style-type: none;
}

.main__background {
    background-color: var(--darker-violet);
}

.main-font {
    font-family: Montserrat, sans-serif;
    color: var(--white);
}

.body {
    display: flex;
    justify-content: center;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 4.8rem;
    max-width: 120rem;
}

.vector-image-for-hero-section-right {
    background: var(--hero-vector_right) right 8rem top no-repeat;
    background-size: 50rem;
}
</style>
`;