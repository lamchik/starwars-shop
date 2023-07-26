import styles from './styles.module.css'


interface Props{
  count?: number
}

export const Counter = ({count}: Props) => {
  return (
    <div className={styles.circle}>
      <p className={styles.circleText}>{count}</p>
    </div>
  )
}
