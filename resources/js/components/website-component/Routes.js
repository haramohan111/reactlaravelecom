import React from 'react'
import { Switch, Route } from "react-router-dom"
import Login from '../admin-component/Login'
import Home from './Home'
function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
        </div>
    )
}

export default Routes
