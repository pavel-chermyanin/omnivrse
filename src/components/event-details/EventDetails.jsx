import styles from './eventDetails.module.scss'


export const EventDetails = () => {

  return (
    <div className={styles.event_details}>

      <div className={'container'}>
        <div className={styles.dress_code}>
          <h2 className={styles.title}>ДРЕСС-КОД</h2>
          <div className={styles.jellyfish_decor}/>
        </div>
        <div className={styles.partners}>
          <h2 className={styles.title}>ПАРТНЕРЫ<br/>МЕРОПРИЯТИЯ</h2>
        </div>
        <div className={styles.info_partner}>
          <h2 className={styles.title}>ИНФОРМАЦИОННЫЙ<br/>ПАРТНЕР</h2>
          <p className={styles.info_partner_text}>Sostav</p>
        </div>

      </div>
    </div>
  );
};