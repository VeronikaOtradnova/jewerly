import { useContext, useEffect, useState } from "react";
import { useGetFields } from "../../../hooks/useGetFields"
import styles from '../Filter.module.css'
import { BrandItem } from "./BrandItem";
import { filterContext } from "../../../context/filterContext";
import { generateString } from "../../../helpers/generateString";

export function BrandFilter({brandFilter, setBrandFilter}) {
  const [isOpen, setIsOpen] = useState(true);
  // const [brandFilter, setBrandFilter] = useState('')
  const {filter, setFilter} = useContext(filterContext);
  const brands = useGetFields('brand');

  useEffect(() => {
    setFilter({brand: brandFilter})
  }, [brandFilter])

  return (
    <div className={StyleSheet.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title} onClick={() => setIsOpen(!isOpen)}>БРЕНД:</h3>
        <span className={styles.currentFilter}>{brandFilter === null ? 'Неизвестный бренд' : brandFilter}</span>
      </div>
      {
        isOpen && brands &&
        <ul className={styles.list}>
          {
            brands.map(brand => <BrandItem key={generateString()} brand={brand} currentFilter={brandFilter} setCurrentFilter={setBrandFilter} />)
          }
        </ul>
      }
    </div>
  )
}