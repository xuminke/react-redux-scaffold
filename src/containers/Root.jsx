import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import jaJP from 'antd/lib/locale-provider/ja_JP';
import { LocaleProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Help from './Help';
import NotFound from './NotFound';
import { loggedIn } from '../utils/auth';

const redirectComponent = (props) => {
  return (loggedIn() ? <App {...props} /> : <Redirect to='/login' />);
}

const redirectHelpComponent = (props) => {
  return (loggedIn() ? <Help {...props} /> : <Redirect to='/login' />);
}

const Root = ({ store }) => (
  <Provider store={store}>
    <LocaleProvider locale={jaJP}>
      <Router>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/help" render={ redirectHelpComponent } />
          <Route exact path="/404" component={ NotFound } />
          <Route render={ redirectComponent } />
        </Switch>
      </Router>
    </LocaleProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
