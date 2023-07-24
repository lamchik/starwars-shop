import {Button, ThemeProvider, withStyles} from "@mui/material";
import { createTheme } from '@mui/material/styles';

import ship from '../../assets/images/image.png'
import styles from './styles.module.css'


export const CartItem = () => {


  return (
    <div className={styles.item}>
      <div className={styles.itemImageWrap}>
        <img src={ship} alt='starship' className={styles.itemImage}/>
        <p className={styles.itemName}>Название товара</p>
      </div>

      <div className={styles.itemPriceWrap}>
        <Button color='primary' className={styles.itemButton}>Удалить из корзины</Button>
        <p className={styles.itemPrice}>Цена&nbsp;₽</p>
      </div>
    </div>
  )
}
