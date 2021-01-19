import React from "react";
import { Route, Switch } from "wouter";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";

import { UserProvider } from "./context/UserContext";
import { MediaProvider } from "./context/MediaContext";

const App = () => {
  return (
    <UserProvider>
      <MediaProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={Home} path="/" />
          <Route component={Detail} path="/movies/:id" />
        </Switch>
      </MediaProvider>
    </UserProvider>
  );
};

export default App;
