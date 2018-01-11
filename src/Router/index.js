import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
class Routes extends Component {
    
    render() {
        return <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Redirect to="/Home" />
          </Switch>;
    }
}

export default Routes;