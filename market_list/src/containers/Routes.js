import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../components/Login';
import About from '../components/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketList from '../components/MarketList';
import WeCook from '../components/WeCook';

export default function Routes() {

    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route path="/market">
                    <MarketList/>
                </Route>
                <Route path="/wecook">
                    <WeCook/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}
