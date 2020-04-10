import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contact from '../pages/contact';
import Login from '../auth/Login';
import NotFound404 from '../pages/404';
import PrivateRoute from '../auth/PrivateRoute';

export default class Routing extends Component {
    render() {
        return(
           <Switch>
             <Route path="/login" component={Login}/>
             
             <PrivateRoute path="/" exact component={Dashboard} />
             <PrivateRoute path="/dashboard" component={Dashboard} />
             <PrivateRoute path="/contact" component={Contact} />
             <PrivateRoute component={NotFound404} />
           </Switch>
        )
    }
}