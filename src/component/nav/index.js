import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';

class Nav extends React.Component {

  render() {
    return (
      <div className="header">
        <h1 className="logo">Customer data market Place</h1>
        <h3 className="saying">Take control of the ads that you see... and get paid for it.</h3>

        <h1 className="home"><Link to={'/'}>Home</Link></h1>
      </div>
    );
  }
}


export default Nav;
