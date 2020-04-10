import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute ({component: Component,...rest}) {

    const token = localStorage.getItem('authorization') || null;
  
    return (
        <Route {...rest} render = {props =>
            
            token && token != null ? (
                <Component {...props} />
            ):(
                <Redirect to="/login"/>
            )
        } 
        />
    )
}