import React from 'react'
import ReactDOM from 'react-dom';
import Header from './vender-component/Header';
import Dashboard from './vender-component/Dashboard';
import Menu from './vender-component/Menu';
import Footer from './vender-component/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


function Vender() {

    return (
        <div>
            {/* <Router>
                <Switch>
                    <Route path="/vender" exact component={Vender} /> 
                </Switch>
            </Router> */}
            <div className="wrapper">
                <Header />
                <Menu />
                <Dashboard />
                <Footer />
            </div>
        </div>
    )

}

export default Vender;

if (document.getElementById('vender')) {
    ReactDOM.render(<Vender />, document.getElementById('vender'));
}
