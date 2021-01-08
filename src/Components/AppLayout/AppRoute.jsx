import React from 'react';
import AppLayout from './AppLayout'
import { Route } from "react-router-dom"; 

const AppRoute = ({ component, ...routeProps }) => {
    return (
        <Route {...routeProps} render={(props) => {
            return (
                <AppLayout { ...props} {...routeProps}>
                    {React.createElement(component, props)}
                </AppLayout>
            );
        }} />
    );
};

export default AppRoute;