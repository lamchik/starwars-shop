import * as React from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {Counter} from "../Counter/Counter";
import cartIcon from "../../../assets/images/shopping_cart_icon.svg";
import {RootState} from "../../../store";
import {Starship} from "../../../domain/starships";
import styles from "./styles.module.css";

export const Cart = () => {
  const items = useSelector<RootState, Starship[]> (
    (state) => state.cart.cart
  )

  const getElemCountInCart = () => {
    let count = 0
    const shipsFromLS = localStorage.getItem('starships')
    const shipsFromLSSerialised = shipsFromLS ? JSON.parse(shipsFromLS) : null
    if(shipsFromLSSerialised) {
      for(let key in shipsFromLSSerialised) {
        count += shipsFromLSSerialised[key]
      }
      return count
    }
    return undefined
  }

  useEffect(() => {
    getElemCountInCart()
  }, [items])

  const elem = getElemCountInCart() ? (<Counter count={getElemCountInCart()}/>) : null

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
