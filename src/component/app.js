import '../style/base/_reset.scss';
import '../style/main.scss';

import React from 'react';
import Landing from './landing';
import Content from './content';
import Nav from '../component/nav/index';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <main className="application">
        <BrowserRouter>
          <React.Fragment>
            <Nav />
            <Route exact path="/" component={Content}/>
            <Route exact path="/Landing" component={Landing}/>
            {/* <Route exact path="/JoinRoom" component={() => store.getState().socket ? <JoinRoom /> : <Redirect to="/" />}/> */}
          </React.Fragment>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
