import { useContext, useRef } from "react";
import styles from '../Filter.module.css'
import { filterContext } from "../../../context/filterContext";

export function ProductFilter({productFilter, setProductFilter}) {
  const { filter, setFilter } = useContext(filterContext);
  const inputRef = useRef();

  const handleBlur = () => {
    if (!productFilter) return;
    setFilter({ product: productFilter })
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
      type="text"
      value={productFilter}
      onChange={e => setProductFilter(e.target.value)}
      onBlur={handleBlur}
      onKeyUp={handleKeyUp}
      className={styles.input}
      placeholder="Название"
    />
  )
}