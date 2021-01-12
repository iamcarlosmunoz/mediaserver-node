import React from "react"
import { Route, Switch } from "wouter";

import AppLayout from "./components/AppLayout"
import HomePage from "./pages/HomePage"
import Detail from "./pages/Detail"

const App = () => {

    return (
        <AppLayout>
            <Switch>
                <Route component={HomePage} path="/" />
                <Route component={Detail} path="/movies/:id" />
            </Switch>
        </AppLayout>
    )
}

export default App