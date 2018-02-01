import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux';
import App from './pages/App/App';

class Main extends Component {
  state = {  }
  render() {
    // console.log(this.props)
    return <Provider store={store} >
        <HashRouter>
          <Switch>
            <Route exact to="/" component={App} />
            {/* <Redirect path="/" to={'/Home'} /> */}
          </Switch>
        </HashRouter>
      </Provider>;
  }
}

export default Main;
