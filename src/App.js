import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoutes from './containers/PrivateRoutePaths';
import Login from './components/Login';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />
        <Switch>
          <Route exact path={['/users/login', '/users/sign-up']} component={Login} />
          <PrivateRoutes />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
