import {StarshipCardsList} from "../../components/StarshipCardsList/StarshipCardsList";
import {useDispatch, useSelector} from "react-redux";
import React, {ReactNode, useEffect} from "react";
import {Action, loadStarships, State} from "../../store/starships";
import {ThunkDispatch} from "redux-thunk";
import {RootState} from "../../store";
import {DataState} from "../../domain/dataState";
import {Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

type Props = {
  dataState: DataState
  error?: string
  children: ReactNode
}

export const Page = ({dataState, children, error}: Props) => {
  return (
    <>
      {dataState === DataState.LOADED && children}
      {dataState === DataState.LOADING && (
        <Grid container justifyContent="center" item xs={12}>
          <CircularProgress />
        </Grid>
      )}
      {dataState === DataState.FAILED && <Typography>{error}</Typography>}
    </>
  )
}
