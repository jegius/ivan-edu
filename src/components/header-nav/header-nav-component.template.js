import styles from './header-nav-component.styles.js';


export default `
    ${styles}
    <nav class='navigation'>
      <slot></slot>
<!--        <ul class='header__nav'>-->
<!--            <li class='header__nav-item'><link-component></link-component></li>-->
<!--            <li class='header__nav-item'><link-component></link-component></li>-->
<!--            <li class='header__nav-item'><link-component></link-component></li>-->
<!--            <li class='header__nav-item'><link-component></link-component></li>-->
<!--        </ul>-->
    </nav>
`;