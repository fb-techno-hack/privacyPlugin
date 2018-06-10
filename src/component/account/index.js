import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { zIndex } from 'material-ui/styles';
import withAuthentication from './session/with-authentication';
import SignUpPage from './signup';
import SignInPage from './signin';
import PasswordForgetPage from './password-forget';
import Account from './account';
import Landing from './landing';
import Home from '../landing/index';

const containerStyle = {
  paddingTop: '7em',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '10',
};

const Login = () => (
  <Fragment>
    <BrowserRouter>
      <div style={containerStyle} className="outerContainer">
        <Route path="/" component={Landing} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/pw-forget" component={PasswordForgetPage} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  </Fragment>
);

export default withAuthentication(Login);
