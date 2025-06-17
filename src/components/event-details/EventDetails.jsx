import styles from './eventDetails.module.scss'
import {mainSiteUrl, sostavSiteUrl} from "../../App.jsx";
import {LinkButton} from "../link-button/LinkButton.jsx";
import sostavLogo from '../../assets/sostav-logo.webp'


export const EventDetails = () => {

  return (
    <div className={styles.event_details}>

      <div className={'container'}>
        <div id={'dress_code'} className={styles.dress_code}>
          <h2 className={styles.title}>ДРЕСС-КОД</h2>
          <div className={styles.jellyfish_decor}/>
        </div>
        {/*<div id={'partners'} className={styles.partners}>*/}
        {/*  <h2 className={styles.title}>ПАРТНЕРЫ<br/>МЕРОПРИЯТИЯ</h2>*/}
        {/*</div>*/}
        <div id={'partners'} className={styles.info_partner}>
          <h2 className={styles.title}>ИНФОРМАЦИОННЫЙ<br/>ПАРТНЕР</h2>
          <LinkButton plain target={'_blank'} href={sostavSiteUrl}>
            <img className={styles.sostav_logo} src={sostavLogo} alt="sostavLogo"/>
            {/*<p className={styles.info_partner_text}>Sostav</p>*/}
          </LinkButton>
        </div>

      </div>
    </div>
  );
};