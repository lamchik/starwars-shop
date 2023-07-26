import * as React from "react";

import styles from './styles.module.css'
import {Cart} from "../UI/Cart/Cart";
import {MainLogo} from "../UI/MainLogo/MainLogo";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";
import {ThunkDispatch} from "redux-thunk";
import {ActionCart, loadCart, State} from "../../store/cart";
import {useEffect} from "react";


export const Header = () => {
  const dispatch: ThunkDispatch<State, any, ActionCart> = useDispatch()
  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const starshipsInCart = useSelector<RootState, Starship[]> (
    (state) => state.cart.cart
  )

  return (
    <div className={styles.header}>
      <MainLogo/>
      <Cart count={starshipsInCart.length}/>
    </div>

  )
}
