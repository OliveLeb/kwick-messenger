import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context as AuthContext} from '../context/AuthContext';
import { Provider as DataProvider} from '../context/DataContext';



const LoggedRoute = ({children, ...rest}) => {
    
    const { isLogged } = useContext(AuthContext);

    return (
        <DataProvider>
        <Route {...rest} render={({ location }) => 
        isLogged  
        ? children
        : <Redirect to={{
              pathname: "/login",
              state: { from: location }
            }} />
            }
        />
        </DataProvider>
    );
    

};
export default LoggedRoute;