import * as React from 'react';
import Card from '@mui/material/Card';
import image from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import Grid from "@mui/material/Grid";

interface Props {
  starship: Starship;
}

export const StarshipCard = ({starship}: Props) => {
  return (
    <Card className={styles.container} sx={{boxShadow: 'none', borderRadius: '12px', transition: '0.3s linear'}}>
      <div className={styles.cardImage}>
        <img src={image} alt='card' className={styles.cardImage__image}/>
        <div className={styles.cardImage__overlay}>
          <p className={styles.cardImage__overlayText}>Добавить в корзину</p>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <p className={styles.title}>
          {starship.name}
        </p>
        {starship.cost_in_credits && <p className={styles.price}>
          ₽&nbsp;{new Intl.NumberFormat('ru-RU').format(starship.cost_in_credits)}
        </p>}
      </div>
    </Card>
  );
}
