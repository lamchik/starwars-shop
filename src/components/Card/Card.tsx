import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import image from '../../assets/images/image.png'
import styles from './styles.module.css'


export const ActionAreaCard = () => {
  return (
    <Card className={styles.container} sx={{boxShadow: 'none', borderRadius: '6px', transition: '0.3s linear'}}>
      <img src={image} alt='card' className={styles.image}/>

      <div className={styles.overlay}>
        <p className={styles.tooltip}>Добавить в корзину</p>
      </div>
      <CardContent className={styles.content} sx={{padding: '1rem 0.25rem 1rem 0rem', boxSizing: 'border-box', ":last-child": {paddingBottom: '16px'}}}>
          <p className={styles.title}>
            Название товара
          </p>
          <p className={styles.price}>
            Цена товара
          </p>
        </CardContent>
    </Card>
  );
}
