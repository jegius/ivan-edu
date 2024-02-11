import styles from './about-section-component.styles.js';

export default `
    ${styles}
    <section class='section about-section__back-image'>
        <section-line-component></section-line-component>
        <div class='section__main-content'>
           <hero-section-image-face-component></hero-section-image-face-component>
            <about-section-cart-component></about-section-cart-component>
        </div>
    </section>
`;