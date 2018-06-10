import React, { Component } from 'react';

import { auth } from '../../util/fire';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

export default class PasswordChangeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };

    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit (event){
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({
          passwordOne: '',
          passwordTwo: '',
          error: null,
        }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(updateByPropertyName('passwordOne', event.target.value))
          }
          type="password"
          placeholder="New Password"
        />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(updateByPropertyName('passwordTwo', event.target.value))
          }
          type="password"
          placeholder="Confirm New Password"
        />
        <button disabled={isInvalid} type="submit">
          Reset My Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
