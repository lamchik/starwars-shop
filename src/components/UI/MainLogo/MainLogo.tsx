import logoIcon from '../../../assets/images/main_icon.svg'
import {Link} from "react-router-dom";
import styles from './styles.module.css'

export const MainLogo = () => {
  return (
    <Link to={`/`} className={styles.wrapper}>
      <img src={logoIcon} alt='logo'/>
    </Link>
  )
}
