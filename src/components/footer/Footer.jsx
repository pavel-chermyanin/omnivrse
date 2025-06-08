import styles from './footer.module.scss'
import footer from '../../assets/footer-image.webp'


export const Footer = () => {

  return (
    <footer className={styles.footer}>

      <div className={styles.img_wrapper}>
        <img className={styles.footer_img} src={footer} alt=""/>
        <p className={styles.footer_text}>
          {/*IZMENI SOZNANIE*/}
        </p>
      </div>
    </footer>
  );
};