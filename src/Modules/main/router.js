import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Contact from '../pages/contact';
import Login from '../auth/Login';
import NotFound404 from '../pages/404';
import PrivateRoute from '../auth/PrivateRoute';
import Admin from '../admins/Admin';
import CreateAdmin from '../admins/CreateAdmin';
import Language from '../admins/Language';
import Languages from '../admins/Languages';
import ProfessionCreate from '../profession/ProfessionCreate';
import Professions from '../profession/Professions';

export default class Routing extends Component {
    render() {
        return(
           <Switch>
             
             <Route path="/login" component={Login}/>
             
             <PrivateRoute path="/" exact component={Dashboard} />
             <PrivateRoute path="/dashboard" component={Dashboard} />
             <PrivateRoute path="/contact" component={Contact} />
             <PrivateRoute path="/admins" component={Admin} />
             <PrivateRoute path="/admin/create" exact component={CreateAdmin} />
             <PrivateRoute path="/language/create" exact component={Language} />
             <PrivateRoute path="/languages" exact component={Languages} />
             <PrivateRoute path="/profession/create" exact component={ProfessionCreate} />
             <PrivateRoute path="/professions" exact component={Professions} />

             <PrivateRoute component={NotFound404} />
           </Switch>
        )
    }
}