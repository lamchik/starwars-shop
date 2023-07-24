import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import {StarshipCard} from "../Card/Card";

import styles from './styles.module.css'
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {MultipleEntity, Starship} from "../../domain/starships";
import {DataState} from "../../domain/dataState";
import {Typography} from "@mui/material";


export const CardsList = () => {

  const starships = useSelector<RootState, MultipleEntity<Starship> | undefined>(
    (state) => state.starships.starships
  );
  const dataState = useSelector<RootState, DataState>(
    (state) => state.starships.dataState
  );
  const error = useSelector<RootState, string | undefined>(
    (state) => state.starships.error
  );

  if (dataState === DataState.FAILED) {
    return <Typography>{error}</Typography>;
  }

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
