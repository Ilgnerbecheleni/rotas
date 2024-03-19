
import { useContext } from 'react';
import './App.css'
import Header from './Components/Header'
import AppRoutes from './Routes/Routes'
import { AuthGoogleContext } from './contexts/authGoogle';

function App() {
 
  const {user,SignOut}=useContext(AuthGoogleContext)

  const logado = JSON.parse(user);

  return (
    <>
    <Header user ={logado}  SignOut={SignOut}/>
    <AppRoutes/>
    </>
  )
}

export default App
