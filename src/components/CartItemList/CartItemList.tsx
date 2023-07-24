import Grid from "@mui/material/Grid";

import {CartItem} from "../CartItem/CartItem";
import styles from './styles.module.css'

export const CartItemList = () => {
  let arr = [1, 2]

  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <Grid xs={12} container justifyContent="center" className={styles.itemsTitleContainer}>
          <p className={styles.itemsTitle}>Корзина</p>
        </Grid>
        <Grid container spacing={3.75}>
          {arr.map((elem) => (
            <Grid xs={12} item>
              <CartItem/>
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} container justifyContent="space-between" className={styles.itemsFinalCostContainer}>
          <p className={styles.itemsFinalCostTitle}>Итого</p>
          <p className={styles.itemsFinalCost}>Цена&nbsp;₽</p>
        </Grid>
      </div>
    </div>
  )
}
