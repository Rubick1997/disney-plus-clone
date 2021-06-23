import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { UserInfo } from "./types";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  const user: UserInfo = useAppSelector((state) => state.user);

  return (
    <div>
      <Router>
        <Header />
        {user.name?.length !== 0 && (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/detail/:media_type/:id" component={Detail} />
            <Route path="/" component={Home} />
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
