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
<!--        <p class='section__text section-line__paragraph'>-->
<!--        Vitae sapien pellentesque habitant morbi tristique senectus et netus-->
<!--        et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit-->
<!--        amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra-->
<!--        aliquet eget sit amet tellus. Ornare lectus sit amet est placerat-->
<!--        in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>-->
    </div>
`;