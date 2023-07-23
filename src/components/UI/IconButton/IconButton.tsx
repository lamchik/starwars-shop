import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import styles from "./styles.module.css";


interface Props {
  icon: string
  alt: string
  title?: boolean
  text?: string
  className?: string
}

export const IconButtons = (props: Props) => {

  return (
    <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <div className={styles.wrapper}>
          <img src={props.icon} alt={props.alt} />
          {props.title ?
            <p className={props.className}>{props.text}</p> :
            null
          }
        </div>
      </IconButton>
    </Stack>
  );
}
