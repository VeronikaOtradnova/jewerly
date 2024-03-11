import { generateString } from '../../helpers/generateString';
import { Card } from '../Card/Card';
import styles from './CardsList.module.css';

export function CardsList({ items }) {
  return (
    <>
      { items && 
        <ul className={styles.list} >
          {
            items.length > 0 ?
            items.map(item => <Card key={generateString()} card={item} />) :
            <div className={styles.empltyListMessage}>По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска</div>
          }
        </ul >
      }
    </>
  )
}