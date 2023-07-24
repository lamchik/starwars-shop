import Grid from "@mui/material/Grid";

import {CartItem} from "../CartItem/CartItem";
import styles from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";
import {useCallback} from "react";

export const CartItemList = () => {
  const items = useSelector<RootState, Starship[]> (
    (state) => state.cart.cart
  )

  const getFinalCost = useCallback(() => {
    let cost = 0
    items.forEach((elem) => {
      if(elem.cost_in_credits) {
        cost += elem.cost_in_credits
      }
    })
    return cost
  }, [items])

  const finalCost = new Intl.NumberFormat('ru-RU').format(getFinalCost())

  return (
    <div className={styles.mainContainer}>
      <div className={styles.itemsContainer}>
        <Grid xs={12} container justifyContent="center" className={styles.itemsTitleContainer}>
          <p className={styles.itemsTitle}>Корзина</p>
        </Grid>
        <Grid container spacing={3.75}>
          {items.map((elem) => (
            <Grid xs={12} item key={elem.url}>
              <CartItem item={elem}/>
            </Grid>
          ))}
        </Grid>
        <Grid xs={12} container justifyContent="space-between" className={styles.itemsFinalCostContainer}>
          <p className={styles.itemsFinalCostTitle}>Итого</p>
          <p className={styles.itemsFinalCost}>{finalCost}&nbsp;₽</p>
        </Grid>
      </div>
    </div>
  )
}
