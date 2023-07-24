import { combineReducers } from "redux";
import {starshipsReducer} from "./starships";
import {cartReducer} from "./cart";

export const rootReducer = combineReducers({
  starships: starshipsReducer,
  cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
