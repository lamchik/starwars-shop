import {Starship} from "../domain/starships";
import {DataState} from "../domain/dataState";


export type State = {
  cart: Starship[];
  dataState: DataState;
  error?: string;

};

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
