
import './content.scss';
import {Link, Redirect} from 'react-router-dom';
import { renderIf } from '../../lib/utils';
import React from 'react';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
    this.setRedirect = this.setRedirect.bind(this);
  }

  setRedirect() {
    this.setState({redirect: true});
  }

  render() {
    return (
      <div className="home-page">
        <h1 className="home-saying">CUSTOMER DATA MARKET PLACE</h1>
        {/* <button className="btn-signup" onClick={() => this.setRedirect()}>Sign up</button> */}
        {renderIf(this.state.redirect, <Redirect to="/Landing" />)}
      </div>
    );
  }
}


export default Content;
