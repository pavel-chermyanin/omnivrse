import styles from './eventDetails.module.scss'
import sostavLogo from '../../assets/sostav-logo.webp'
import {PartnerItem} from "./PartnerItem.jsx";
import broom from './assets/broom.png'
import siberian_express from './assets/siberian-express.png'
import sibsa from './assets/sibsa.png'
import chernogolovka from './assets/chernogolovka.png'
import maer from './assets/maer.png'
import lagom_black from './assets/lagom_black.png'
import jamlup from './assets/jamlup.png'
import impression_agency from './assets/impression-agency.png'
import x5_blogger from './assets/x5-blogger.png'
import solta from './assets/solta.png'
import avito from './assets/avito.png'
import white_leads from './assets/white-leads.png'
import darkside from './assets/darkside.png'
import rgb_graphics from './assets/rgb-graphics.png'
import vozdooh from './assets/vozdooh.png'
import lavry from './assets/lavry.png'
import digital_club from './assets/digital-club.png'
import t_frame from './assets/t-frame.png'
import nemedia from './assets/nemedia.png'
import zen from './assets/zen.png'
import timeout from './assets/timeout.png'
import pari from './assets/pari.png'
import mscv from './assets/mscv.png'
import urban from './assets/urban.png'
import buro from './assets/buro.png'


export const EventDetails = () => {

  return (
    <div className={styles.event_details}>
      {/*<img className={styles.event_bg} src={eventBg} alt=""/>*/}
      <div className={'container'}>
        <div id={'dress_code'} className={styles.dress_code}>
          <h2 className={`${styles.title} ${styles.dresscode_title}`}>ДРЕСС-КОД</h2>
          <div className={styles.jellyfish_decor}/>
        </div>
        {/*<div id={'partners'} className={styles.partners}>*/}
        {/*  <h2 className={styles.title}>ПАРТНЕРЫ<br/>МЕРОПРИЯТИЯ</h2>*/}
        {/*</div>*/}
        <div id={'partners'} className={styles.partners}>
          {/*<h2 className={styles.title}>ИНФОРМАЦИОННЫЙ<br/>ПАРТНЕР</h2>*/}
          {/*  <img className={styles.sostav_logo} src={sostavLogo} alt="sostavLogo"/>*/}

          <PartnerItem title={'АЛКОГОЛЬНЫЙ ПАРТНЕР'} listImages={[broom,siberian_express,sibsa]} />
          <PartnerItem title={'БЕЗАЛКОГОЛЬНЫЙ ПАРТНЕР'} listImages={[chernogolovka]} single/>
          <PartnerItem title={'МУЛЬТИМЕДИЙНЫЙ ПАРТНЕР'} listImages={[maer]} single/>
          <PartnerItem title={'ИНФОРМАЦИОННЫЙ ПАРТНЕР'} listImages={[sostavLogo]} single/>
          <PartnerItem title={'ПАРТНЕР ПО ВИДЕОКОНТЕНТУ'} listImages={[lagom_black]} single/>
          <PartnerItem count={4} title={'ПАРТНЕРЫ МЕРОПРИЯТИЯ'} listImages={[
            urban,jamlup,impression_agency,x5_blogger
          ]} fullWidth/>
          <div className={`${styles.grid_4} ${styles.grid_mobile}`}>
            {[solta,avito,white_leads,darkside].map((item, ) => (
               <img className={`${styles.img_logo}`} src={item} alt=""/>
            ))}
          </div>
          <div className={`${styles.grid_4} ${styles.grid_mobile}`}>
            {[rgb_graphics,vozdooh,lavry,digital_club].map((item, ) => (
               <img className={`${styles.img_logo}`} src={item} alt=""/>
            ))}
          </div>
          <div className={`${styles.grid_4} ${styles.grid_mobile}`}>
            {[t_frame,nemedia,zen,timeout].map((item, ) => (
               <img className={`${styles.img_logo}`} src={item} alt=""/>
            ))}
          </div>
          <div className={`${styles.grid_2} ${styles.grid_mobile}`}>
            {[mscv,buro].map((item ) => (
               <img className={`${styles.img_logo}`} src={item} alt=""/>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};