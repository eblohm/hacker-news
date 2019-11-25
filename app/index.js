import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Posts from "./components/Posts";

const App = () => {
  return (
    <Router>
      <Nav />
      <Posts />
    </Router>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
