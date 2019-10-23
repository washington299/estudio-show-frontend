import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';

import { Container } from './styles';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';

const App = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/forgot" component={Forgot} />
        <Container>
          <Sidebar />
          <Header />
          <Route exact path="/" component={Home} />
        </Container>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
