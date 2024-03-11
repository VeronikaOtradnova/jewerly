import styles from './Loader.module.css';

export function Loader({status}) {
  return (
    <div className={styles.wrapper}>
      { status === 'pending' && <div className={styles.loader} />}
      { status === 'err' && <div style={{color: 'red'}}>Ошибка</div> }
    </div>
  )
}