import {ReactNode} from "react";

import styles from './styles.module.css'

//todo: добавить этот контейнер в разметку


export const MainContainer = (children?: ReactNode) => {

  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}
