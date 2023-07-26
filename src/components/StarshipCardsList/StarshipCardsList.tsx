import Grid from '@mui/material/Grid';
import {StarshipCard} from "../Card/StarshipCard";

import styles from './styles.module.css'
import {MultipleEntity, Starship} from "../../domain/starships";

type Props = {
  starships: MultipleEntity<Starship>
}

export const StarshipCardsList = ({starships}: Props) => {
  return (
    <div className={styles.mainContainer}>
      <Grid container spacing={2} className={styles.cardContainer}>
        <Grid container justifyContent="center" item xs={12}>
          {starships && <p className={styles.counter}>{starships.count}&nbsp;товаров</p>}
        </Grid>
        {starships && starships.results.map((starship) => (
          <Grid xs={12} sm={6} md={4} lg={4} xl={4} key={starship.url} item>
            <StarshipCard starship={starship}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
