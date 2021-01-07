import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AuthProvider } from './context/AuthContext';
import LoggedRoute from './HOC/LoggedRoute'

import Header from './components/Header';
import Home from './pages/Home';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <AuthProvider>
    <Router>
      <Header />
      <main>
        <Switch>
          <LoggedRoute path='/' exact>
            <Home />
          </LoggedRoute>
          <Route path='/login'>
            <LogIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
        </Switch>
      </main>
    </Router>
    </AuthProvider>
  );
}

export default App;
