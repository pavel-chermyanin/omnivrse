import styles from './concept.module.scss';
import neo from './neo.png'

export const Concept = () => {
  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <h4 className={styles.sup_title_text}>КОНЦЕПЦИЯ</h4>
        <h3 className={styles.title}>
          <img src={neo} alt="neo"/>
        </h3>
        <p className={styles.text}>Свет гаснет. Тишина.</p>
        <p className={styles.text}>Представление начинается!</p>

        <p className={`${styles.text} ${styles.text_mt}`}>
          Все привычное растворяется — и остаётся лишь
          пространство, где сцена, зал, закулисье,
          артисты и гости становятся единым целым! И вы
          уже не просто наблюдатели, но соавторы
          большого действа, наполненного магией и
          чудесами.</p>
        <p className={`${styles.text} ${styles.text_mt}`}>
          Здесь каждое мгновение — дыхание волшебства
          вокруг; каждый трюк — раскрытие нового себя,
          каждая искра света — отражение чьей-то
          эмоции. Тут можно быть любым и проявить то,
          что всегда было внутри, но скрывалось.</p>
        <p className={`${styles.text} ${styles.text_mt}`}>


          Digital Elka 2025. Неоцирк.

        </p>
      </div>
    </div>
  )
}