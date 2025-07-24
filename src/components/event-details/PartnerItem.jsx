import styles from './partnerItem.module.scss'
// import sostavLogo from "../../assets/sostav-logo.webp";


export const PartnerItem = ({title, listImages, single, fullWidth, count = null}) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div
        className={`${styles.grid} ${single ? styles.single : ''} ${fullWidth ? styles.fullWidth : ''} ${count === 4 ? styles.grid_4 : ''}`}>
        {listImages.map(image => {
          return <img className={`${styles.img_logo}`} src={image} alt="sostavLogo"/>
        })}
      </div>
    </div>
  )
}