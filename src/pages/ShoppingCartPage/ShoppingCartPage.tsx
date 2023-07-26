import { ThunkDispatch } from "redux-thunk";
import {CartItemList} from "../../components/CartItemList/CartItemList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {State, ActionCart, loadCart, deleteStarshipFromCart} from "../../store/cart";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";
import {Page} from "../../hoc/Page/Page";

export const ShoppingCartPage = () => {
  const dispatch: ThunkDispatch<State, any, ActionCart> = useDispatch()
  const {cart: starships, dataState, error} = useSelector<RootState, State> (
    (state) => state.cart
  )

  const handleDeleteButton = (starship: Starship, starshipIndex: number) => {
    dispatch(deleteStarshipFromCart(starship, starshipIndex))
  }

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <>
      <Page dataState={dataState} error={error}>
        {starships && <CartItemList onDelete={handleDeleteButton} starships={starships}/>}
      </Page>
    </>
  )
}
