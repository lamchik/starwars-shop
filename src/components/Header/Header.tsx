import * as React from "react";

import styles from './styles.module.css'
import {Cart} from "../UI/Cart/Cart";
import {MainLogo} from "../UI/MainLogo/MainLogo";
import {Counter} from "../UI/Counter/Counter";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {Starship} from "../../domain/starships";


export const Header = () => {

  return (
    <div className={styles.header}>
      <MainLogo/>
      <Cart/>
    </div>

  )
}
