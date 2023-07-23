import {IconButtons} from "../UI/IconButton/IconButton";
import cartIcon from '../../assets/images/shopping_cart_icon.svg'
import logoIcon from '../../assets/images/main_icon.svg'

import styles from './styles.module.css'


export const Header = () => {

  return (
    <div className={styles.header}>
      <IconButtons icon={logoIcon} alt='logo'/>
      <IconButtons
        icon={cartIcon}
        alt='shopping cart'
        title={true}
        className={styles.cartText}
        text='Корзина'/>
    </div>

  )
}
