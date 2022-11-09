import React, { useEffect } from 'react';
import { authLoaded } from './redux/actions/authActions';
import Router from './routes/Router';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom'

const App = ({ authLoaded }) => {

    useEffect(() => {
        authLoaded()
     },[authLoaded])

    return (
       <HashRouter>
         <Router />
       </HashRouter>
    )
}

export default connect(null, { authLoaded })(App);