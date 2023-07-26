import * as React from 'react';
import Card from '@mui/material/Card';
import image from '../../assets/images/image.png'
import styles from './styles.module.css'
import {Starship} from "../../domain/starships";
import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {ThunkDispatch} from "redux-thunk";
import {ActionCart, addStarshipToCart, State} from "../../store/cart";

interface Props {
  starship: Starship;
}

export const StarshipCard = ({starship}: Props) => {
  const dispatch: ThunkDispatch<State, any, ActionCart> = useDispatch()

  const onClickButton = useCallback(() => {
    dispatch(addStarshipToCart(starship))
  }, [starship])

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
