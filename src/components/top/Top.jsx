import styles from './top.module.scss'
import geo from '../../assets/geo.png'
import {Button} from "../button/Button.jsx";

export const Top = () => {
  return (
    <div className={styles.top}>

      <div className={'container'}>
        <div className={styles.date}>
          <p>25.07.2025</p>
          <p>19:00 – 02:00</p>
        </div>
        <h1 className={styles.title}>
          <span>летняя</span>
          <span className={styles.title_primary_color_text}>DIGITAL ELKA</span>
          <span>2025</span>
        </h1>
        <div className={styles.fotter}>
          <div className={styles.geo_wrapper}>
            <img src={geo} alt="geo"/>
            <span className={styles.geo_wrapper_top_span}>СУПЕРМЕТАЛЛ</span>
            <span>2-я Бауманская, 9/23</span>
          </div>
          <div className={styles.button_wrapper}>
            <Button>Купить билет</Button>
          </div>
        </div>

      </div>
    </div>
  );
};