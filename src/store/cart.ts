import {Starship} from "../domain/starships";


export type State = {
  cart: Starship[];
};

type ActionStarshipsAdded = {
  type: 'StarshipAdded';
  value: Starship;
}

type ActionStarshipsDeleted = {
  type: 'StarshipDeleted';
  value: Starship;
}

const initialState = {
  cart: []
}


type Action = ActionStarshipsAdded | ActionStarshipsDeleted

export const cartReducer = (state: State=initialState, action: Action): State => {
  switch (action.type) {
    case 'StarshipAdded':
      return {...state, cart: [ ...state.cart, action.value]}
    case 'StarshipDeleted':
      return {...state, cart: state.cart.filter(elem => elem.url !== action.value.url)}
    default:
      return state
  }
}
