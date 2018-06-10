import './landing.scss';
import React from 'react';
import { connect } from 'react-redux';

class Landing extends React.Component {

  render() {
    return (
      <div className="link-to-download">
        <a className="crome-link" href="https://chrome.google.com/webstore/category/extensions?hl=sw">DownLoad Here</a>
      </div>
    );
  }
}

export default Landing;
