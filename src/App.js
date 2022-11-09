import React, { useEffect } from 'react';
import { authLoaded } from './redux/actions/authActions';
import Router from './routes/Router';
import { connect } from 'react-redux';

const App = ({ authLoaded }) => {

    useEffect(() => {
        authLoaded()
     },[authLoaded])

    return (
        <Router />
    )
}

export default connect(null, { authLoaded })(App);