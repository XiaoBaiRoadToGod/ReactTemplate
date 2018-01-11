import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import {  } from 'react-router'
import App from './pages/App/App';
import './Main.css';

class Main extends Component {
  state = {  }
  render() {
    // console.log(this.props)
    return <HashRouter>
        <Switch>
          <Route exact to="/" component={App} />
          {/* <Redirect path="/" to={'/Home'} /> */}
        </Switch>
      </HashRouter>;
  }
}

export default Main;
