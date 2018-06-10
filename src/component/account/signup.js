import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { Paper, FlatButton, RaisedButton, TextField } from 'material-ui';
import { styles } from './assets';
import './account.scss';
import { renderIf } from '../../lib/utils';
import { auth, db } from '../../util/fire';

const SignUpPage = ({ history }) => (
  <Paper className="sign-container">
    <SignUpForm history={history} />
  </Paper>
);

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      redirect: false,
    };

    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);}

  submit(e) {
    e.preventDefault();

    const { username, email, passwordOne } = this.state;
    const { push } = this.props.history;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
      db.doCreateUser(authUser.uid, username, email).then(() => {
        this.setState(() => ({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null,
          redirect: true,
        }));
        push('/Landing');
      });
    });
  };

  change (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { textField } = styles;
    const { submit, change } = this;
    const labels = [
      'Full Name',
      'Email Address',
      'Password',
      'Confirm Password',
    ];

    return (
      <form className="sign-form" onSubmit={submit}>
        <h1>Sign Up</h1>

        {Object.keys(this.state).map((field, i) => (
          <TextField
            {...textField}
            key={field}
            onChange={change}
            name={field}
            placeholder={labels[i]}
            value={this.state[field]}
            type={(field == 'passwordOne' || field == 'passwordTwo' )?'password'
              :(field == 'email')? 'email'
                : 'text'
            }
          />
        ))}

        <RaisedButton label="Sign Up" type="submit" />
        {renderIf(this.state.redirect, <Redirect to="/Landing" />)}
      </form>
    );
  }
}

const SignUpLink = () => (
  <Link to="/sign-up">
    <FlatButton className="alt-button" label="Signup" />
  </Link>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
