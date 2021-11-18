import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
const App = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies/:id" children={<SingleMovie />}></Route>
    </Switch>
  );
};

export default App;
