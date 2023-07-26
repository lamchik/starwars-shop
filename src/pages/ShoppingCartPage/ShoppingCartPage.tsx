import { ThunkDispatch } from "redux-thunk";
import {CartItemList} from "../../components/CartItemList/CartItemList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {State, ActionCart, loadCart, deleteStarshipFromCart} from "../../store/cart";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";
import {DataState} from "../../domain/dataState";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import {Typography} from "@mui/material";

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
      {dataState === DataState.LOADED && starships && (
        <CartItemList onDelete={handleDeleteButton} starships={starships}/>
      )}
      {dataState === DataState.LOADING && (
        <Grid container justifyContent="center" item xs={12}>
          <CircularProgress />
        </Grid>
      )}
      {dataState === DataState.FAILED && <Typography>{error}</Typography>}
    </>
  )
}
