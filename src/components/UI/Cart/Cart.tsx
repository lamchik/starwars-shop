import styles from "./styles.module.css";
import cartIcon from "../../../assets/images/shopping_cart_icon.svg";
import {Link} from "react-router-dom";
import * as React from "react";

export const Cart = () => {

  return (
      <Link to={`/cart`} className={styles.wrapper}>
        <img src={cartIcon} alt='cart' />
        <p className={styles.text}>Корзина</p>
      </Link>
  )
}
