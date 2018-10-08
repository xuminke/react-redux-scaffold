import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// have children routes

export default class CustomizeRoutes extends Component {
  render() {
    return(
      <Switch>
        {/* default path */}
        <Route exact path="/" render={ () => <Redirect to="/vm" /> } />
        {/* have children routes path */}
        {/* 404 path */}
        <Route render={ () => <Redirect to="/404" /> } />
      </Switch>
    );
  }
}
