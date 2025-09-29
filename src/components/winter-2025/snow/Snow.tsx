// components/winter-2025/snow/Snow.tsx
import styles from './snow.module.scss';

export const Snow = () => {
  return (
    <div className={styles.snowContainer}>
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={styles.snowflake}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 25}s`,
            opacity: Math.random() * 0.7 + 0.3,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >
          •
        </div>
      ))}
    </div>
  );
};