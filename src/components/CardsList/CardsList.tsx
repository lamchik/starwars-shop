import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import {StarshipCard} from "../Card/Card";

import styles from './styles.module.css'
import {loadStarships} from "../../api/starships";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Action} from "../../store/starships";
import {RootState} from "../../store";
import {MultipleEntity, Starship} from "../../domain/starships";
import {DataState} from "../../domain/dataState";


export const CardsList = () => {
  const dispatch = useDispatch();
  const dispatchAction = useCallback(
    (action: Action) => {
      dispatch(action);
    },
    [dispatch]
  );


  const loadStarshipsToState = useCallback(() => {
    loadStarships()
      .then((starships) => {
        dispatchAction({type: "StarshipsLoaded", value: starships});
      })
      .catch((err) => {
        dispatchAction({type: "FailedToLoad", value: err.toString()});
      });
  }, [dispatchAction]);

  const getStarships = useCallback(() => {
    dispatchAction({type: "StarshipsLoading"});
    loadStarshipsToState();
  }, [dispatchAction, loadStarshipsToState]);

  useEffect(() => {
    getStarships();
    // let timerId = setInterval(loadNewsToState, 60000);
    // return () => {
    //   clearInterval(timerId);
    // };
  }, [getStarships]);

  const starships = useSelector<RootState, MultipleEntity<Starship> | undefined>(
    (state) => state.starships.starships
  );
  const dataState = useSelector<RootState, DataState>(
    (state) => state.starships.dataState
  );
  const error = useSelector<RootState, string | undefined>(
    (state) => state.starships.error
  );

  console.log(starships)

  return (
    <Grid container spacing={2} className={styles.container}>
      {dataState === DataState.LOADED ? (
        <>
          <Grid container justifyContent="center" xs={12}>
            {starships && <p className={styles.counter}>{starships.count}&nbsp;товаров</p>}
          </Grid>
          {starships && starships.results.map((starship) => (
            <Grid xs={12} sm={6} md={4} lg={4} xl={4} key={starship.model} item>
              <StarshipCard starship={starship}/>
            </Grid>
          ))}
        </>
      ) : (
        <Grid container justifyContent="center" xs={12}>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  )
}
