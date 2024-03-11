import styles from '../Filter.module.css';

export function BrandItem({brand, currentFilter, setCurrentFilter}) {
  const className = brand === currentFilter ? `${styles.item} ${styles.selectedItem}` : styles.item;

  const handleClick = () => {
    setCurrentFilter(brand);
  }

  return (
    <li className={className} onClick={handleClick}>{brand === null ? 'Неизвестный бренд' : brand}</li>
  )
}