import styles from './footer-section-component.styles.js';

export default `
    ${styles}
    <div class='section footer__back-image'>
        <div class='footer__line font-weight-700 '>
            <header-logo-component></header-logo-component>
            <div class='footer__line-vector-border'></div>
            <footer-section-nav-ul-component></footer-section-nav-ul-component>
            <div class='footer__line-vector-border'></div>
            <footer-section-nav-ul-component></footer-section-nav-ul-component>
            <div class='footer__line-vector-border'></div>
            <footer-section-socialize-component></footer-section-socialize-component>
        </div>
        <div class='footer__hr'></div>
    </div>
`;