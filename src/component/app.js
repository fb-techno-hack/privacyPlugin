import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Landing from './landing';
import Content from './content';
import Nav from '../component/nav/index';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import { grey800 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

  render() {
    return (
      <main className="application">
        <MuiThemeProvider muiTheme={muiTheme}>
          <BrowserRouter>
            <React.Fragment>
              <Nav />
              <Route exact path="/" component={Content}/>
              <Route exact path="/Landing" component={Landing}/>
              {/* <Route exact path="/JoinRoom" component={() => store.getState().socket ? <JoinRoom /> : <Redirect to="/" />}/> */}
            </React.Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </main>
    );
  }
}

export default App;
