export default `
<style>
        @import url('../common.css');

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

.header__nav-item {
    /*color: var(--white);*/
    color: var(--darkest-violet)
    text-decoration: none;
    border-top: .1rem solid var(--nav-item-bordr);
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
}

.header__nav-item:not(.header__nav-item_active)::after {
    position: absolute;
    margin-left: .25rem;
    border-radius: 10rem;
    background-color: var(--lightest-violet);
    content: "";
    height: .5rem;
    width: .5rem;
    transform: scale(0);
    transition: transform .2s ease-in-out;
}

.header__nav-item_active {
    border-bottom: .1rem solid var(--nav-item-bordr_active);
}

.header__nav-item:hover:after {
    transform: scale(1);
}

</style>
`;