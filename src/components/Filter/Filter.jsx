import { useEffect, useState } from 'react';
import { BrandFilter } from './BrandFilter/BrandFilter';
import styles from './Filter.module.css';
import { PriceFilter } from './PriceFilter/PriceFilter';
import { ProductFilter } from './ProductFilter/ProductFilter';

export function Filter() {
  const [productFilter, setProductFilter] = useState('')
  const [priceFilter, setPriceFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')

  useEffect(() => {
    if (!productFilter) return;
    setPriceFilter('');
    setBrandFilter('');
  }, [productFilter])

  useEffect(() => {
    if (!priceFilter) return;
    setProductFilter('');
    setBrandFilter('');
  }, [priceFilter])

  useEffect(() => {
    if (!brandFilter) return;
    setProductFilter('');
    setPriceFilter('');
  }, [brandFilter])

  return (
    <div className={styles.wrapper}>
      <ProductFilter productFilter={productFilter} setProductFilter={setProductFilter} />
      <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
      <BrandFilter brandFilter={brandFilter} setBrandFilter={setBrandFilter} />
    </div>
  )
}