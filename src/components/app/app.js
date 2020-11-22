import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HomePage, UsersPage, TagsPage, QuestionPage } from '../pages';
import Header from '../header';
import UserPage from "../pages/user-page";
// import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users/" component={UsersPage} />
        <Route exact path="/tags/" component={TagsPage} />
        <Route exact path="/questions/:id" component={QuestionPage} />
        <Route exact path="/users/:id" component={UserPage} />
        <Redirect from='/Stack-Overflow-Clone/' to="/" />
        {/* <Redirect to="/" /> */}
      </Switch>
      <Route exact path="/blank" />
    </>
  );
}

export default App;
