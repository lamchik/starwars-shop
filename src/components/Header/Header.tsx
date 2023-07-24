import * as React from "react";

import styles from './styles.module.css'
import {Cart} from "../UI/Cart/Cart";
import {MainLogo} from "../UI/MainLogo/MainLogo";


export const Header = () => {

  return (
    <div className={styles.header}>
      <MainLogo/>
      <Cart/>
    </div>

  )
}
