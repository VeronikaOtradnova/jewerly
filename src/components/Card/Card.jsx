import styles from './Card.module.css';

export function Card ({card}) {
  return (
    <div className={styles.card}>
      <div className={styles.id}>{`Id: ${card.id}`}</div>
      <h5 className={styles.title}>{card.product}</h5>
      <div className={styles.title}>{card.brand}</div>
      <div className={styles.price}>{`${card.price} ₽`}</div>
    </div>
  )
}