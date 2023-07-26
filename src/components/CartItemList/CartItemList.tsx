import Grid from "@mui/material/Grid";
import {CartItem} from "../CartItem/CartItem";
import {Starship} from "../../domain/starships";
import styles from './styles.module.css'

type Props = {
  starships: Starship[]
  onDelete: (starship: Starship, starshipIndex: number) => void;
}

export const CartItemList = ({starships, onDelete}: Props) => {
  const finalCost = new Intl.NumberFormat('ru-RU').format(
    starships.reduce(
      (val, starship) => val + (starship.cost_in_credits || 0),
      0,
    )
  )

  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <Grid xs={12} item container justifyContent="center" className={styles.itemsTitleContainer}>
          <p className={styles.itemsTitle}>Корзина</p>
        </Grid>
        <Grid container spacing={3.75} xs={12} item>
          {starships.map((elem, index) => (
            //todo: использую index как key потому что в корзине может повторяться один и тот же объект
            <Grid item key={index} xs={12}>
              <CartItem item={elem} onDelete={() => onDelete(elem, index)}/>
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} item container justifyContent="space-between" className={styles.itemsFinalCostContainer}>
          <p className={styles.itemsFinalCostTitle}>Итого</p>
          <p className={styles.itemsFinalCost}>{finalCost}&nbsp;₽</p>
        </Grid>
      </div>
    </div>
  )
}
