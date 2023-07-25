import * as React from 'react';
import Card from '@mui/material/Card';
import image from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import {useDispatch} from "react-redux";
import {useCallback} from "react";

interface Props {
  starship: Starship;
}

export const StarshipCard = ({starship}: Props) => {
  const dispatch = useDispatch()

  const onClickButton = useCallback(() => {
    dispatch({type: 'StarshipAdded', value: starship})
    let starshipFromLC: string | null = localStorage.getItem('starships')
    let starshipFromLCSerialized: Record<string, number> = starshipFromLC ? JSON.parse(starshipFromLC) : null
    if(!starshipFromLCSerialized) {
      starshipFromLCSerialized = {}
    }
    const count = starshipFromLCSerialized[starship.url]
    starshipFromLCSerialized[starship.url] = count ? count+1 : 1
    localStorage.setItem(`starships`, JSON.stringify(starshipFromLCSerialized))
  }, [])

  return (
    <Card className={styles.container} sx={{boxShadow: 'none', borderRadius: '12px', transition: '0.3s linear'}}>
      <div className={styles.cardImage}>
        <img src={image} alt='card' className={styles.cardImage__image}/>
        <button className={styles.cardImage__overlay} onClick={onClickButton}>
          <p className={styles.cardImage__overlayText}>Добавить в корзину</p>
        </button>
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
