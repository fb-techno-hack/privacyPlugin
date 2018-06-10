import React from 'react';

import AuthContext from './context';
import { firebase } from '../../../util/fire';

const { Provider } = AuthContext;

const withAuthentication = Component =>
  class WithAuthentication extends React.Component {
    constructor(props){
      super(props);
      this.state = { authUser: null };

    }

    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.setState(() => ({ authUser }))
          : this.setState(() => ({ authUser: null }));
      });
    }

    render() {
      const { authUser } = this.state;

      return (
        <Provider value={authUser}>
          <Component />
        </Provider>
      );
    }
  };

export default withAuthentication;
