import styles from './optin-section-component.styles.js';

export default `
    ${styles}
    <section>
        <div class='optin-section'>
        <section-title-component></section-title-component>
        <div class='optin-section__vector-hr'></div>
        <section-title-slim-component></section-title-slim-component>
        <div class='optin-section__pulls-wrapper _gap-1rem _padding-top-2rem'>
            <optin-section-input-small-component style='display: flex;flex-grow: 1;'></optin-section-input-small-component>
            <optin-section-input-small-component style='display: flex;flex-grow: 1;'></optin-section-input-small-component>
        </div>
        <div class='optin-section__pulls-wrapper _gap-1rem'>
            <optin-section-input-small-component style='display: flex;flex-grow: 1;'></optin-section-input-small-component>
            <optin-section-input-small-component style='display: flex;flex-grow: 1;'></optin-section-input-small-component>
        </div>
        <optin-section-input-small-component></optin-section-input-small-component>
        <optin-section-input-small-component></optin-section-input-small-component>
        <optin-section-input-small-component></optin-section-input-small-component>
        <optin-section-input-small-component></optin-section-input-small-component>
        <button-component></button-component>
        </div>
    </section>
`;