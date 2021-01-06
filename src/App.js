import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AuthProvider } from './context/AuthContext';
import LoggedRoute from './HOC/LoggedRoute'

import Header from './components/Header';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

import './App.css';


function App() {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <Switch>
        <LoggedRoute path='/' exact>
        {/* <Route path='/' exact> */}
          <Home />
        {/* </Route> */}
        </LoggedRoute>
        <Route path='/login'>
          <LogIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
