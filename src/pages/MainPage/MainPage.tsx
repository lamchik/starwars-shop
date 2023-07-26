import {StarshipCardsList} from "../../components/StarshipCardsList/StarshipCardsList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Action, loadStarships, State} from "../../store/starships";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../store";
import {DataState} from "../../domain/dataState";
import {Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

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
      {dataState === DataState.LOADED && starships && <StarshipCardsList starships={starships}/>}
      {dataState === DataState.LOADING && (
        <Grid container justifyContent="center" item xs={12}>
          <CircularProgress />
        </Grid>
      )}
      {dataState === DataState.FAILED && <Typography>{error}</Typography>}
    </>
  )
}
