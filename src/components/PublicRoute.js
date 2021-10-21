import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import {Route,Redirect} from 'react-router-dom';

export default function PublicRoute({component: Component, ...rest}) {
    const {currentUser} = useAuth();
    return !currentUser ? (
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
    ) : (
        <Redirect to ="/" />
    );
}
