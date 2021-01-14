import React from "react"
import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Detail from "./pages/Detail"

import { UserProvider } from "./context/UserContext"

const App = () => {

    return (
        <UserProvider>
            <Switch>
                <Route component={HomePage} path="/" />
                <Route component={Login} path="/login" />
                <Route component={Detail} path="/movies/:id" />
            </Switch>
        </UserProvider>
    )
}

export default App