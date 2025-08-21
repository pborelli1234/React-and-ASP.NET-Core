import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './route-config';
import configureValidations from './Validations';
import { useEffect, useState } from 'react';
import { claim } from './auth/auth.models';
import AuthenticationContext from './auth/AuthenticationContext';
import { getClaims } from './auth/handleJWT';
import configureInterceptor from './utils/httpInterceptors';

configureValidations();
configureInterceptor();

function App() {

  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  function isAdmin() {
    return claims.findIndex(claim => claim.name === 'role' && claim.value === 'admin') > -1;
  }

  return (
    <>
      <BrowserRouter>
        <AuthenticationContext.Provider value={{claims, update: setClaims}}>
          <Menu />
          <div className='container'>
            <Switch>
              {routes.map(route => 
                <Route key={route.path} path={route.path} exact={route.exact}>
                  {route.isAdmin && !isAdmin() ? <>
                    You do not have access to this page.
                  </> : <route.component />}
                  
                </Route>
              )}
            </Switch>
          </div>
          <footer className="bd-footer footer-item">
            <div className="container">
                React Movies {new Date().getFullYear().toString()}
            </div>
          </footer>
        </AuthenticationContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
