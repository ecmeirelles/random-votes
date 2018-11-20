import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ListQuestions from "./components/ListQuestions";
import AboutQuestion from "./components/AboutQuestion";
import Page404 from "./components/Page404";
import CreateQuestion from "./components/CreateQuestion";

class Routes extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={ListQuestions} />
          <Route path="/about" component={AboutQuestion} />
          <Route path="/new" component={CreateQuestion} />
          <Route component={Page404} />
        </Switch>
    )
  }
}

export default Routes;
