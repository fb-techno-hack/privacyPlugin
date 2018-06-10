import React from 'react';

import AuthContext from './session/context';
import { PasswordForgetForm } from './password-forget';
import PasswordChangeForm from './password-change';
import withAuthorization from './session/with-authorization';

const { Consumer } = AuthContext;

const AccountPage = () => (
  <Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
