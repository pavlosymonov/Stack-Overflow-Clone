import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HomePage, UsersPage, TagsPage } from '../pages';
import Header from '../header';
// import './App.css';

function App() {
  return (
    <>
      <Redirect from='/Stack-Overflow-Clone/' to="/" />{/*   Dev only    */}
      
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users/" component={UsersPage} />
        <Route exact path="/tags/" component={TagsPage} />
      </Switch>
      <Route exact path="/blank" />
    </>
  );
}

export default App;
