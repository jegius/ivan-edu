import styles from './section-line-component.styles.js';

export default `
    ${styles}
    <div class='section__line main-font'>
        <div>
            <section-title-component></section-title-component>
            <div class='line-wrapper _gap-1rem'>
                <section-title-slim-component></section-title-slim-component>
                <div class='arrow-big'></div>
            </div>
        </div>
        <hero-section-paragraph-component></hero-section-paragraph-component>
    </div>
`;