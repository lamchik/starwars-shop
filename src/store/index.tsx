import { combineReducers } from "redux";
import {starshipsReducer} from "./starships";

export const rootReducer = combineReducers({
  starships: starshipsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
