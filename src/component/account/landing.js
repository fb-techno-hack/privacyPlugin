import React, { Component, Fragment } from 'react';
import { FlatButton } from 'material-ui';

export default class Landing extends Component {
  constructor(props){
    super(props);
    this.state = { showLogo: true };

    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);

  }

  signin () {
    this.setState({ showLogo: false });
    this.props.history.push('/sign-in');
  };

  signup () {
    this.setState({ showLogo: false });
    this.props.history.push('/sign-up');
  };

  render() {
    const { signin, signup } = this;
    const { showLogo } = this.state;
    return (
      <Fragment>
        <FlatButton label="Sign In" onClick={signin} />
        <FlatButton label="Sign Up" onClick={signup} />
        {showLogo ? <div className="logo-container" /> : null}
      </Fragment>
    );
  }
}
