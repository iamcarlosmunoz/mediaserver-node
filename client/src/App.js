import React from "react"
import { Route, Switch } from "wouter";

import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Detail from "./pages/Detail"

import { UserProvider } from "./context/UserContext"
import { MediaProvider } from "./context/MediaContext"

const App = () => {

    return (
        <UserProvider>
            <Switch>
                <Route component={Login} path="/login" />
                <MediaProvider>
                    <Route component={HomePage} path="/" />
                    <Route component={Detail} path="/movies/:id" />
                </MediaProvider>
            </Switch>
        </UserProvider>
    )
}

export default App