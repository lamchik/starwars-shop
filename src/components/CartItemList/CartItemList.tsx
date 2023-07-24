import Grid from "@mui/material/Grid";

import styles from './styles.module.css'
import {CartItem} from "../CartItem/CartItem";

export const CartItemList = () => {
  let arr = [1, 2, 3, 4]

  return (
    <div className={styles.mainContainer}>
      <Grid container className={styles.itemsContainer}>
        {arr.map((elem) => (
          <Grid xs={12} item>
            <CartItem/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
