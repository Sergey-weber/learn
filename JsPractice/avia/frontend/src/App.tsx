import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';

import { getCookie } from './common/cookie';

import { Main } from './components/Main';
import { Login } from './components/Login';
import { Registration } from './components/Registration';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Posts } from './components/Posts';

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:4000/api/' : '';
axios.defaults.headers.common.Authorization = getCookie('Authorization');

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/posts" component={Posts} />
        {/* <Route component={Notfound} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
