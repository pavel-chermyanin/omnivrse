import styles from './top.module.scss'
import geo from '../../assets/geo.png'
import {Button} from "../button/Button.jsx";
import {buyTicketUrl, geoUrl} from "../../App.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";

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
          <LinkButton plain href={geoUrl} rel="noopener noreferrer" target="_blank">
            <div className={styles.geo_wrapper}>
              <img src={geo} alt="geo"/>
              <span className={styles.geo_wrapper_top_span}>СУПЕРМЕТАЛЛ</span>
              <span>2-я Бауманская, 9/23</span>
            </div>
          </LinkButton>

          <div className={styles.button_wrapper}>
            <LinkButton target={'_blank'} href={buyTicketUrl}>Купить билет</LinkButton>
          </div>
        </div>

      </div>
    </div>
  );
};