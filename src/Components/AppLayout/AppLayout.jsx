import React from 'react';
// import Auth from '../../Auth/AuthService'
// import { Redirect } from 'react-router-dom';

const AppLayout = (props) => {
    return (
        <>
            {/* {props.requireAuth === 'requireLogin' &&
                !Auth.isUserLoggedIn() &&
                <Redirect to="/login" />
            } */}
            {props.navBar ? React.createElement(props.navBar) : null}
            {props.children}
            {props.pushDiv ? React.createElement(props.pushDiv) : null}
            {props.downNavBar ? React.createElement(props.downNavBar) : null}
        </>
    );
};

export default AppLayout;