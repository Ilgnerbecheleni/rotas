import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import {Navigate} from 'react-router-dom'
import login from '../../assets/google.jpg'
import styles from './styles.module.css'
function Login() 
  {

    const {signingoogle, signed}= useContext(AuthGoogleContext);
    async function signIn(){
      await signingoogle();
    }
    if(!signed){
    return (
    <>
    <h1>Login</h1>
      <button onClick={signIn} className={styles.btn}>
        <img src={login} alt="login" className={styles.btnlogin}/>
      </button>
    </>
    )
    }else{
      return <Navigate to={'/'}/>
    }
    
    }

export default Login
