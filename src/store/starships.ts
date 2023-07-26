import {MultipleEntity, Starship} from "../domain/starships";
import {DataState} from "../domain/dataState";
import {loadStarships as loadStarshipsFromApi} from '../api/starships'

export function loadStarships() {
  return (dispatch: (action: Action) => void) => {
    dispatch({type: "StarshipsLoading"})

    loadStarshipsFromApi()
      .then((starships) => {
        dispatch({type: "StarshipsLoaded", value: starships});
      })
      .catch((err) => {
        dispatch({type: "FailedToLoad", value: err.toString()});
      });
  }
}

export type State = {
  starships?: MultipleEntity<Starship>;
  dataState: DataState;
  error?: string;
};

type ActionStarshipsLoaded = {
  type: 'StarshipsLoaded';
  value: MultipleEntity<Starship>;
}

type ActionStarshipsLoading = {
  type: "StarshipsLoading";
};

type ActionFailedToLoad = {
  type: "FailedToLoad";
  value: string;
};

export type Action =
  | ActionStarshipsLoaded
  | ActionStarshipsLoading
  | ActionFailedToLoad;

const initialState: State = {
  dataState: DataState.IDLE,
};

export const starshipsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case "StarshipsLoading":
      return { ...state, dataState: DataState.LOADING };
    case "StarshipsLoaded":
      return {
        ...state,
        dataState: DataState.LOADED,
        starships: action.value,
      };
    case "FailedToLoad":
      return { ...state, dataState: DataState.FAILED, error: action.value };
    default:
      return state;
  }
};
