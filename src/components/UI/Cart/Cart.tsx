import * as React from "react";
import {Link} from "react-router-dom";

import {Counter} from "../Counter/Counter";
import cartIcon from "../../../assets/images/shopping_cart_icon.svg";
import styles from "./styles.module.css";

type Props = {
  count: number;
}

export const Cart = ({count}: Props) => {
  return (
    <div className={styles.cartContainer}>
      <Link to={`/cart`} className={styles.wrapper}>
        <img src={cartIcon} alt='cart' />
        <p className={styles.text}>Корзина</p>
      </Link>
      {count ? <Counter count={count}/> : null}
    </div>
  )
}
