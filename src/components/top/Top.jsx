import styles from './top.module.scss'
import geo from '../../assets/geo.png'
import {Button} from "../button/Button.jsx";
import {buyTicketUrl, geoUrl, mainSiteUrl} from "../../App.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";
import titleImg from '../../assets/title.webp'
import plateImg from '../../assets/plate.webp'

export const Top = () => {
  return (
    <div className={styles.top}>

      <div className={'container'}>
        <div className={styles.date}>
          <p>25.07.2025</p>
          <p>19:00 – 02:00</p>
        </div>
        <div className={styles.title}>
          <span>летняя</span>
          <div className={styles.title_primary_color_text}>
            <img src={titleImg} alt=""/>

              <LinkButton className={styles.title_link} plain target={'_blank'} href={mainSiteUrl}>
                <img src={plateImg} alt=""/>
              </LinkButton>

            <h1 className={styles.visually_hidden}>DIGITAL ELKA</h1>

          </div>
          <span>2025</span>
        </div>
        <div className={styles.fotter}>
          <LinkButton plain href={geoUrl} rel="noopener noreferrer" target="_blank">
            <div className={styles.geo_wrapper}>
              <img className={styles.geo_img} src={geo} alt="geo"/>
              <span className={styles.geo_wrapper_top_span}>СУПЕРМЕТАЛЛ</span>
              <span id={'about'} >2-я Бауманская, 9/23</span>
            </div>
          </LinkButton>

          {/*<div className={styles.button_wrapper}>*/}
          {/*  <LinkButton target={'_blank'} href={buyTicketUrl}>Купить билет</LinkButton>*/}
          {/*</div>*/}
        </div>

      </div>
    </div>
  );
};