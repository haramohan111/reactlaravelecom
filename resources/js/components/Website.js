import React from 'react';
import ReactDOM from 'react-dom';
import CategoryContainer from './website-component/container/CategoryContainer';
import Home from './website-component/Home';
import { Provider } from 'react-redux'
import axios from 'axios'

import store from './website-component/redux/store'
import {BrowserRouter as Router,Switch, Route,Redirect,useHistory} from "react-router-dom"
import Routes from './website-component/Routes';


function Website() {
    
    axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
    return (
        <Router>
        <Switch>
        <Provider store={store}>
        <div>
        <Routes/>
        </div>
        </Provider>
        </Switch>
        </Router>
    );
}

export default Website;

if (document.getElementById('example')) {
    ReactDOM.render(<Website />, document.getElementById('example'));
}
