import Grid from '@mui/material/Grid';

import {ActionAreaCard} from "../Card/Card";

import styles from './styles.module.css'


export const CardsList = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Grid container spacing={2} className={styles.container}>

      {arr.map((elem) => (
        <Grid key={elem} item >
          <ActionAreaCard/>
        </Grid>
      ))}
    </Grid>
  )
}
