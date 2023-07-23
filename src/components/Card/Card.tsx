import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import image from '../../assets/images/image.png'
import styles from './styles.module.css'


export const ActionAreaCard = () => {
  return (
    <Card className={styles.container}>
      <img src={image} alt='card' className={styles.image}/>
        <CardContent className={styles.content}>
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
