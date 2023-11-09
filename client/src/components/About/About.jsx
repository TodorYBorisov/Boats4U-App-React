import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles['about-us']}>
            <h3>ABOUT US</h3>
            <p>Nunc auctor turpis quis mollis porttitor</p>
            <p>Penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a metus et mauris suscipit
                maximus. Vestibulum eget tellus et nulla vestibulum vulputate. Mauris eget magna eget orci consequat
                interdum. Aenean vel nisi sollicitudin. Penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Fusce a metus et mauris suscipit maximus.</p>
        </section>
    );
}
