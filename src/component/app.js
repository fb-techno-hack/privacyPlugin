import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Info from './info';
// import Content from './content';
import Home from './home';
import Nav from '../component/nav/index';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { grey800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { zIndex } from 'material-ui/styles';
import withAuthentication from './account/session/with-authentication';
import SignUpPage from './account/signup';
import SignInPage from './account/signin';
import PasswordForgetPage from './account/password-forget';
import Account from './account/account';
import Logo from './account/landing';

const containerStyle = {
  paddingTop: '7em',
  textAlign: 'center',
  margin: '0 auto',
  zIndex: '10',
};

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey800,
  },
  fontFamily: 'Roboto, sans-serif',
  textField: {
    focusColor: 'rgb(138, 126, 190)',
    borderColor: grey800,
  },
});



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Authenticated: false,
    };
  }

  render() {
    return (
      <main className="application">
        <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter>
            <React.Fragment>
              <Nav />
              <Route exact path="/" component={Home}/>
              <Route path="/logo" component={Logo} />
              <Route exact path="/sign-in" render={()=><SignInPage Authenticated={this.state.Authenticated} someProp={100}/>} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/pw-forget" component={PasswordForgetPage} />
              <Route exact path="/account" component={Account} />
              <Route exact path="/info" component={Info}/>
            </React.Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </main>
    );
  }
}

export default App;
