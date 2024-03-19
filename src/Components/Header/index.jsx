import { Link } from 'react-router-dom'
import styles from './styles.module.css'
function Header({user, SignOut}) {
  return (
    <header className={styles.header}>
      <ul className={styles.menu}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
      </ul>

     <div>
     {user && <nav className={styles.userinfo}>
        <img src={user.photoURL} alt={user.displayName}  className={styles.userimg}/>
        {user.displayName.split(" ")[0]}
        
        </nav>}

      {user && <button onClick={SignOut} className={styles.userbtn}>Sair</button>}
     </div>
    
    </header>
  )
}

export default Header
