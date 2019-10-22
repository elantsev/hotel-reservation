import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/" component={Rooms} />
      <Route path="/rooms/:id" component={SingleRoom} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
