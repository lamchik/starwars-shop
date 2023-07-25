import styles from "./styles.module.css";
import cartIcon from "../../../assets/images/shopping_cart_icon.svg";
import {Link} from "react-router-dom";
import * as React from "react";
import {Counter} from "../Counter/Counter";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {Starship} from "../../../domain/starships";

export const Cart = () => {

  const items = useSelector<RootState, Starship[]> (
    (state) => state.cart.cart
  )


  const elem = items.length === 0 ? null : (<Counter count={items.length}/>)

  return (
    <div className={styles.cartContainer}>
      <Link to={`/cart`} className={styles.wrapper}>
        <img src={cartIcon} alt='cart' />
        <p className={styles.text}>Корзина</p>
      </Link>
      {elem}
    </div>
  )
}
