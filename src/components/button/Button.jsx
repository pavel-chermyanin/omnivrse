import styles from './button.module.scss';

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`${styles.button} ${className}`} {...props}>
      {children}
    </button>
  );
};