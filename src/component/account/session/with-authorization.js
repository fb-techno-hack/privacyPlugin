import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthContext from './context';
import { firebase } from '../../../util/fire';

const { Consumer } = AuthContext;

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { push } = this.props.history;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          push('/sign-in');
        }
      });
    }

    render() {
      return (
        <Consumer>{authUser => (authUser ? <Component /> : null)}</Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
