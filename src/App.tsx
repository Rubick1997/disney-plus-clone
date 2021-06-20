import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/detail" component={Detail} />
          <Route path="/"component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
