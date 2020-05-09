import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Settings from './pages/Settings/Settings'
import ErrorPage from './pages/ErrorPage/ErrorPage'

const Routes = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/settings' component={Settings}/>
        <Route exact path='*' component={ErrorPage}/>
    </Switch>
    </BrowserRouter>
    )
};

export default Routes; 