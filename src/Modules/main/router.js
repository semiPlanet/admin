import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contact from '../pages/contact';
import NotFound404 from '../pages/404';

export default class Routing extends Component {
    render() {
        return(
           <Switch>
             <Route path="/" exact component={Dashboard} />
             <Route path="/dashboard" component={Dashboard} />
             <Route path="/contact" component={Contact} />
             <Route component={NotFound404} />
           </Switch>
        )
    }
}