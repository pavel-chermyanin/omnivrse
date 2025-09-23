import styles from './partnerItem.module.scss'
// import sostavLogo from "../../assets/sostav-logo.webp";

type Props = {
  title: string
  count?: number
  listImages: { src: string, link?: string }[]
}

export const PartnerItem = ({ title, listImages, count = 1 }: Props) => {

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${count},1fr)`,
          placeItems: 'center',
          placeSelf:'center'
        }}
        className={`${styles.grid}`}>
        {listImages.map((image,index) => {
          if(image.link) {
            return <a key={index} href={image.link} target='_blank' className={styles.link}>
              <img key={index} className={`${styles.img_logo}`} src={image.src} alt="sostavLogo" />
            </a>
          }
          return <img key={index} className={`${styles.img_logo}`} src={image.src} alt="sostavLogo" />
        })}
      </div>
    </div>
  )
}