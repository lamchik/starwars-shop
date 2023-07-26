import ship from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import Grid from "@mui/material/Grid";

interface Props {
  item: Starship
  onDelete: () => void
}

export const CartItem = ({item, onDelete}: Props) => {
  const costs = item.cost_in_credits ? (
      <p className={styles.itemPrice}>
        {new Intl.NumberFormat('ru-RU').format(item.cost_in_credits)}&nbsp;₽
      </p>
    ) : (
      <p className={styles.itemPrice}>Бесценно</p>
  )

  return (
    <Grid className={styles.item} container item xs={12}>
      <Grid className={styles.itemImageWrap} item xs={6}>
        <img src={ship} alt='starship' className={styles.itemImage}/>
        <p className={styles.itemName}>{item.name}</p>
      </Grid>

      <Grid className={styles.itemPriceWrap} item xs={6} justifyContent='end'>
        <Grid xs={10} item display='flex' justifyContent='space-between'>
          <button onClick={onDelete} className={styles.itemButton}>Удалить из корзины</button>
          {costs}
        </Grid>
      </Grid>
    </Grid>
  )
}
