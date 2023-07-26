import {Starship} from "../domain/starships";
import {DataState} from "../domain/dataState";
import {loadStarshipsInCart} from "../api/starships";

export type State = {
  cart: Starship[];
  dataState: DataState;
  error?: string;
};

export function loadCart(): (dispatch: (action: ActionCart) => void) => void {
  return (dispatch: (action: ActionCart) => void) => {
    dispatch({type: "CartLoading"});

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
        dispatch({type: "CartLoaded", value: starships});
      })
      .catch((err) => {
        dispatch({type: "CartFailedToLoad", value: err});
      })
  }
}

export function addStarshipToCart(starship: Starship) {
  return (dispatch: (action: ActionCart) => void) => {
    let starshipFromLC: string | null = localStorage.getItem('starships')
    let starshipFromLCSerialized: Record<string, number> = starshipFromLC ? JSON.parse(starshipFromLC) : {}

    const count = starshipFromLCSerialized[starship.url]
    starshipFromLCSerialized[starship.url] = count ? count+1 : 1
    localStorage.setItem(`starships`, JSON.stringify(starshipFromLCSerialized))

    dispatch({type: 'StarshipAdded', value: starship})
  }
}

export function deleteStarshipFromCart(starship: Starship, starshipIndex: number) {
  return (dispatch: (action: ActionCart) => void) => {
    const shipsFromLS = localStorage.getItem('starships')
    const shipsFromLSSerialised = shipsFromLS ? JSON.parse(shipsFromLS) : null

    if (!shipsFromLSSerialised) return

    shipsFromLSSerialised[starship.url]--
    if (!shipsFromLSSerialised[starship.url]) delete shipsFromLSSerialised[starship.url]
    localStorage.setItem(`starships`, JSON.stringify(shipsFromLSSerialised))
    dispatch({type: 'StarshipDeleted', value: starshipIndex})
  }
}

type ActionStarshipsAdded = {
  type: 'StarshipAdded';
  value: Starship;
}

type ActionStarshipsDeleted = {
  type: 'StarshipDeleted';
  value: number;
}

type ActionCartLoaded = {
  type: 'CartLoaded';
  value: Starship[];
}

type ActionCartLoading = {
  type: "CartLoading";
};

type ActionCartFailedToLoad = {
  type: "CartFailedToLoad";
  value: string;
};

const initialState = {
  cart: [],
  dataState: DataState.IDLE
}


export type ActionCart =
  ActionStarshipsAdded |
  ActionStarshipsDeleted |
  ActionCartLoaded |
  ActionCartLoading |
  ActionCartFailedToLoad

export const cartReducer = (state: State=initialState, action: ActionCart): State => {
  switch (action.type) {
    case 'StarshipAdded':
      return {...state, cart: [ ...state.cart, action.value]}
    case 'StarshipDeleted':
      const newArr: Starship[] = [...state.cart];
      newArr.splice(action.value, 1)
      return {...state, cart: newArr}
    case "CartLoading":
      return { ...state, dataState: DataState.LOADING };
    case "CartLoaded":
      return {
        ...state,
        dataState: DataState.LOADED,
        cart: action.value,
      };
    case "CartFailedToLoad":
      return { ...state, dataState: DataState.FAILED, error: action.value };
    default:
      return state
  }
}
