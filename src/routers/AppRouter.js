import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import React from "react";
import Todos from "../components/Todos";
import NewTodo from "../components/NewTodo";
import SingleTodo from "../components/SingleTodo";

const routes = (
  <Router>
    <Switch>
      <Route path="/" render={() => <Redirect to="/todos" />} exact />
      <Route path="/todos" render={() => <Todos />} exact />
      <Route path="/todos/new" render={() => <NewTodo />} />
      <Route path="/todos/:id" render={props => <SingleTodo {...props} />} />
    </Switch>
  </Router>
);

export default routes;
