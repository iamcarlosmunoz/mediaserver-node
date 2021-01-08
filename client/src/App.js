import React from 'react'
import { Route, Switch } from "wouter";

import AppLayout from './components/AppLayout'
import HomePage from './pages/HomePage'

const App = () => {

    return (
        <AppLayout>
            <Switch>
                <Route component={HomePage} path="/" />
            </Switch>
        </AppLayout>
    )
}

export default App