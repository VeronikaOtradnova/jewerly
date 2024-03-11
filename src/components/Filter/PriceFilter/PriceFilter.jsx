import { useContext, useRef } from "react";
import styles from '../Filter.module.css'
import { filterContext } from "../../../context/filterContext";

export function PriceFilter({priceFilter, setPriceFilter}) {
  const { setFilter } = useContext(filterContext);
  const inputRef = useRef();

  const handleBlur = () => {
    if (!priceFilter) return;
    setFilter({ price: +priceFilter })
  }

  const handleKeyUp = (e) => {
    if (!inputRef.current) return;
    if (e.keyCode === 13) {
      inputRef.current.blur();
    }
  }

  return (
    <input
      ref={inputRef}
      type="number"
      value={priceFilter}
      onChange={e => setPriceFilter(e.target.value)}
      onBlur={handleBlur}
      className={styles.input}
      placeholder="Цена"
      onKeyUp={handleKeyUp}
    />
  )
}