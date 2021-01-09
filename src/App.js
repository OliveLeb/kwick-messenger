import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context as AuthContext } from './context/AuthContext';
import LoggedRoute from './HOC/LoggedRoute'

import Header from './components/Header';
import Home from './pages/Home';
import Auth from './pages/auth/Auth';
import { useContext, useEffect } from 'react';
import { checkForAFK, getLocalStorageData, useLocalStorage } from './utils/utils';




function App() {

  const {isLogged, submitLogIn} = useContext(AuthContext);
  
  useEffect(()=> {
    if(!isLogged){
      let data = useLocalStorage.get(getLocalStorageData)
      const {user_name,user_id,token} = data;
      if(data) submitLogIn(user_id,token,user_name)
    }
  },[isLogged])

  // isLogged && checkForAFK();

  // checkForAFK()

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <LoggedRoute path='/' exact>
            <Home />
          </LoggedRoute>
          <Route path='/login'>
            <Auth req='login' title='Se Connecter'/>
          </Route>
          <Route path='/signup'>
            <Auth req='register' title="S'enregistrer" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
