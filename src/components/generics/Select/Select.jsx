import { useEffect, useState } from 'react';
import styles from '../select.module.css';
import PropTypes from 'prop-types'
import { generateString } from '../../../helpers/generateString';
import { useCloseOnClickOutside } from '../../../hooks/useCloseOnClickOutside';

export function Select({ items, selectedItem, setSelectedItem }) {
  const [inputClassname, setInputClassname] = useState(`search__input ${styles.input}`)
  const [dropdownItems, setDropdownItems] = useState(items.filter(item => item !== selectedItem));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDropdownItems(items.filter(item => item !== selectedItem));
  }, [selectedItem])

  const dropdownRef = useCloseOnClickOutside(() => {
    setIsOpen(false);
  })

  const itemHandler = (e) => {
    e.preventDefault()
    setSelectedItem(e.target.innerText);
    setIsOpen(false);
  }

  const openBtnHandler = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper} onClick={openBtnHandler}>
        <div className={inputClassname}>{selectedItem}</div>

        <button className={isOpen ? `${styles.openIndicator} ${styles.open}` : `${styles.openIndicator}`} />
      </div>

      {
        isOpen &&
        <ul ref={dropdownRef} className={styles.dropdown}>
          {
            dropdownItems.map(item => <li
              key={generateString()}
              className={styles.dropdownItem}
              onClick={itemHandler}
            >
              {item}
            </li>)
          }
        </ul>
      }
    </div>
  )
}

SelectOneValue.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  selectedItem: PropTypes.string,
}