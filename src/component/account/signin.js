import React, { Component } from 'react';
import { withRouter, Redirect} from 'react-router-dom';

import { RaisedButton, TextField, Paper } from 'material-ui';
import { renderIf } from '../../lib/utils';
import { SignUpLink } from './signup';
import { PasswordForgetLink } from './password-forget';
import { auth } from '../../util/fire';
import { styles } from './assets';

const SignInPage = ({ history }) => (
  <Paper className="sign-container">
    <SignInForm history={history} />
    <section className="alt-buttons-container">
      <PasswordForgetLink />
      <SignUpLink />
    </section>
  </Paper>
);

class SignInForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);

  }

  submit (e){
    console.log('Hitting the submit in the signin page---event--->', e);
    e.preventDefault();
    const { email, password } = this.state;
    const { push } = this.props.history;

    auth.doSignInWithEmailAndPassword(email, password).then(() => {
      this.setState(() => (
        { email: '',
          password: '',
          error: null,
          redirect: true,
        }
      ));
      push('/Landing');
    });
    auth.doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        this.setState(() => ({ email: '', password: '', error: null }));
        push('/home');
      });
  };

  change (e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { textField } = styles;
    const { submit, change } = this;
    const labels = ['Email Address', 'Password'];

    return (
      <form className="sign-form" onSubmit={submit}>
        <h1>Sign In</h1>
        {Object.keys(this.state).map((field, i) => (
          <TextField
            {...textField}
            key={field}
            value={this.state[field] || ''}
            onChange={change}
            name={field}
            type={(field == 'password')?'password':'email'}
            placeholder={labels[i]}
          />
        ))}

        <RaisedButton className="main-button" label="Sign In" type="submit" />
        {renderIf(this.state.redirect, <Redirect to="/" />)}
      </form>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };
