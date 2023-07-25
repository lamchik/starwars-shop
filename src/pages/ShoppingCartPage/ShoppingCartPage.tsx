import {Header} from "../../components/Header/Header";
import {CartItemList} from "../../components/CartItemList/CartItemList";
import {useDispatch} from "react-redux";
import {useCallback, useEffect} from "react";
import {loadStarshipsInCart} from "../../api/starships";
import {ActionCart} from "../../store/cart";


export const ShoppingCartPage = () => {
  const dispatch = useDispatch()

  const dispatchAction = useCallback(
    (action: ActionCart) => {
      dispatch(action);
    },
    [dispatch]
  );

  const loadCartToState = useCallback(() => {
    const shipsFromLS = localStorage.getItem('starships')
    const shipsFromLSSerialised = shipsFromLS ? JSON.parse(shipsFromLS) : null
    const arrayOfUrls: string[] = []

    for (let key in shipsFromLSSerialised) {
      if(shipsFromLSSerialised[key] > 1) {
        for (let i = 1; i <= shipsFromLSSerialised[key]; i++) {
          arrayOfUrls.push(key)
        }
      }
      else arrayOfUrls.push(key)
    }

    loadStarshipsInCart(arrayOfUrls)
      .then((starships) => {
        dispatchAction({type: "CartLoaded", value: starships});
      })
      .catch((err) => {
        dispatchAction({type: "CartFailedToLoad", value: err});
      })

    }, [])

  const getStarships = useCallback(() => {
    dispatchAction({type: "CartLoading"});
    loadCartToState();
  }, [dispatchAction, loadCartToState]);

  useEffect(() => {
    getStarships();

  }, [getStarships]);


  return (
    <>
      <Header ></Header>
      <CartItemList/>
    </>
  )
}
