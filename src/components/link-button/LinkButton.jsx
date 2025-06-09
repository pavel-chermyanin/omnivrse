import styles from './link-button.module.scss';

export const LinkButton = (
  {
    children,
    className,
    plain = false,  // Пропс для отключения стилей
    ...props
  }
) => {
  return (
    <a
      className={plain ? className : `${styles.button} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};