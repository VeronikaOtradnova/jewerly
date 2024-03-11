import styles from './Pagination.module.css';

export function Pagination({page, setPage, pagesCount}) {
  const prevBtnHandler = () => {
    setPage(page - 1)
  }

  const nextBtnHandler = () => {
    setPage(page + 1)
  }

  return (
    <div className={styles.wrapper}>
      {
        page > 1 ?
        <button className={`${styles.btn} ${styles.backBtn}`} onClick={prevBtnHandler} /> :
        <button className={`${styles.btn} ${styles.backBtn} ${styles.disabledBtn}`} disabled />
      }

      <div>{`Cтраница ${page}`}</div>
      
      {
        page < pagesCount ?
        <button className={`${styles.btn} ${styles.nextBtn}`} onClick={nextBtnHandler} /> :
        <button className={`${styles.btn} ${styles.nextBtn}`} disabled />
      }
    </div>
  )
}