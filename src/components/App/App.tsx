import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage/MainPage';
import Page2 from '../../pages/Page2/Page2';

import Nav from '../Nav/Nav';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/page2" component={Page2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
