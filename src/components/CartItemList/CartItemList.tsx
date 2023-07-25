import {useCallback} from "react";
import {useSelector} from "react-redux";
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import {CartItem} from "../CartItem/CartItem";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";
import {DataState} from "../../domain/dataState";
import styles from './styles.module.css'

export const CartItemList = () => {
  const items = useSelector<RootState, Starship[]> (
    (state) => state.cart.cart
  )

  const dataState = useSelector<RootState, DataState>(
    (state) => state.cart.dataState
  );
  const error = useSelector<RootState, string | undefined>(
    (state) => state.cart.error
  );

  const getFinalCost = useCallback(() => {
    let cost = 0
    items.forEach((elem) => {
      if(elem.cost_in_credits) {
        cost = cost + elem.cost_in_credits
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
        {dataState === DataState.LOADED ? (
          <>
            <Grid container spacing={3.75} xs={12}>
              {items.map((elem, index) => (
                <Grid item key={index} xs={12}>
                  <CartItem item={elem} itemIndex={index}/>
                </Grid>
              ))}
            </Grid>
            <Grid xs={12} container justifyContent="space-between" className={styles.itemsFinalCostContainer}>
              <p className={styles.itemsFinalCostTitle}>Итого</p>
              <p className={styles.itemsFinalCost}>{finalCost}&nbsp;₽</p>
            </Grid>
          </>
        ) : (
          <Grid container justifyContent="center" xs={12}>
            <CircularProgress />
          </Grid>
        )}
        {dataState === DataState.FAILED ? (
          <Typography>{error}</Typography>
        ): null}
      </div>
    </div>
  )
}
