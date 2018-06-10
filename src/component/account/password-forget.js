import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FlatButton, RaisedButton, Paper, TextField } from 'material-ui';
import { auth } from '../../util/fire';
import { styles } from './assets';

const PasswordForgetPage = () => (
  <Paper className="sign-container">
    <PasswordForgetForm />
  </Paper>
);

class PasswordForgetForm extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', error: null };

    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
  }

  submit(e){
    e.preventDefault();

    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => this.setState(() => ({ email: '', error: null })));
  };

  change (e) {
    this.setState({ [e.target.value]: e.target.value });
  }

  render() {
    const { textField } = styles;
    const { email, error } = this.state;
    const { submit, change } = this;

    return (
      <form className="sign-form" onSubmit={submit}>
        <h1>Reset Password</h1>
        <TextField
          {...textField}
          value={email}
          onChange={change}
          name="email"
          type="text"
          placeholder="Email Address"
        />
        <RaisedButton
          className="main-button"
          label="Reset My Password"
          type="submit"
        />

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <Link to="/pw-forget">
    <FlatButton className="alt-button" label="Forgot Password?" />
  </Link>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };
