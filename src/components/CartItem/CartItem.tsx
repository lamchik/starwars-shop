import ship from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import Grid from "@mui/material/Grid";


interface Props {
  item: Starship
  itemIndex: number
}


export const CartItem = ({item, itemIndex}: Props) => {
  const dispatch = useDispatch()
  const handleDeleteButton = useCallback(() => {
    dispatch({type: 'StarshipDeleted', value: itemIndex})
    const shipsFromLS = localStorage.getItem('starships')
    const shipsFromLSSerialised = shipsFromLS ? JSON.parse(shipsFromLS) : null
    let count = shipsFromLSSerialised[item.url]

    if(count > 1) {
      shipsFromLSSerialised[item.url] = count-1
    }
    else delete shipsFromLSSerialised[item.url]

    localStorage.setItem(`starships`, JSON.stringify(shipsFromLSSerialised))

  }, [item, dispatch])

  return (
    <Grid className={styles.item} container xs={12}>
      <Grid className={styles.itemImageWrap} item xs={6}>
        <img src={ship} alt='starship' className={styles.itemImage}/>
        <p className={styles.itemName}>{item.name}</p>
      </Grid>

      <Grid className={styles.itemPriceWrap} item xs={6} justifyContent='end'>
        <Grid xs={10} item display='flex' justifyContent='space-between'>
          <button onClick={handleDeleteButton} className={styles.itemButton}>Удалить из корзины</button>
          {
            item.cost_in_credits &&
          <p className={styles.itemPrice}>
            {new Intl.NumberFormat('ru-RU').format(item.cost_in_credits)}&nbsp;₽
          </p>
          }
        </Grid>
      </Grid>
    </Grid>
  )
}
