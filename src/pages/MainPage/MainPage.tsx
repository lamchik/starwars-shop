import {StarshipCardsList} from "../../components/StarshipCardsList/StarshipCardsList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Action, loadStarships, State} from "../../store/starships";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../store";
import {Page} from "../../hoc/Page/Page";

export const MainPage = () => {
  const dispatch: ThunkDispatch<State, any, Action> = useDispatch()
  const {starships, dataState, error} = useSelector<RootState, State>(
    (state) => state.starships
  );

  useEffect(() => {
    dispatch(loadStarships())
  }, [dispatch]);

  return (
    <>
      <Page dataState={dataState} error={error}>
        {starships && <StarshipCardsList starships={starships}/>}
      </Page>
    </>
  )
}
