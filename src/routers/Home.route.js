import React from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Navber } from '../components/Navber'
import Home from '../pages/Home'


export default function HomeRoute() {
    return (
        <Router>
            <Navber />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    )
}
