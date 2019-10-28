import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Forgot from '../pages/Forgot';
import Home from '../pages/Home';
import Photographers from '../pages/Photographers';
import Support from '../pages/Support';

import { Container } from './styles';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/forgot" component={Forgot} />
      <Container>
        <Sidebar />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/photographers" component={Photographers} />
        <Route path="/support" component={Support} />
      </Container>
    </Switch>
  </BrowserRouter>
);

export default Routes;
