import ship from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import {useDispatch} from "react-redux";
import {useCallback} from "react";


interface Props {
  item: Starship
}


export const CartItem = ({item}: Props) => {
  const dispatch = useDispatch()

  const handleDeleteButton = useCallback(() => {
    dispatch({type: 'StarshipDeleted', value: item})
  }, [])

  return (
    <div className={styles.item}>
      <div className={styles.itemImageWrap}>
        <img src={ship} alt='starship' className={styles.itemImage}/>
        <p className={styles.itemName}>{item.name}</p>
      </div>

      <div className={styles.itemPriceWrap}>
        <button onClick={handleDeleteButton} className={styles.itemButton}>Удалить из корзины</button>
        {
          item.cost_in_credits &&
        <p className={styles.itemPrice}>
          {new Intl.NumberFormat('ru-RU').format(item.cost_in_credits)}&nbsp;₽
        </p>
        }
      </div>
    </div>
  )
}
