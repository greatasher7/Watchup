import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Nav from "Components/Header";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import Search from "Routes/Search";
import TV from "Routes/TV";
import Detail from "Routes/Detail";

const RouterComponent = () => (
    <BrowserRouter>
        <Nav />
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/movie" component={Movie}/>
            <Route path="/show" component={TV}/>
            <Route path="/search" component={Search}/>
            <Route path="/movie-detail/:id" component={Detail}/>
            <Route path="/show-detail/:id" component={Detail}/>
            {/* <Redirect from="*" to="/"/> */}
        </Switch>
    </BrowserRouter>
);

export default RouterComponent;