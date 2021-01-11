import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Context as AuthContext } from './context/AuthContext';
import LoggedRoute from './HOC/LoggedRoute'

import Header from './components/Header';
import Home from './pages/home/Home';
import Auth from './pages/auth/Auth';
import { getLocalStorageData, useLocalStorage } from './utils/utils';
import { Provider as OptionProvider } from './context/OptionContext';




function App() {

  const {isLogged, submitLogIn} = useContext(AuthContext);
  
  // CHECK IF LOCALSTORAGE AND IF SAVED TOKEN NOT EXPIRED TO CONNECT
  useEffect(()=> {
    if(!isLogged){
      let data = useLocalStorage.get(getLocalStorageData)
      const {user_name,user_id,token,tmp} = data;
      if(data) {
        if((Date.now() - parseInt(tmp)) < 1200000) {
          submitLogIn(user_id,token,user_name)
        }
        else useLocalStorage.delete();
      }
    }
  },[isLogged])

  return (
    <OptionProvider>
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
    </OptionProvider>
  );
}

export default App;
