import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginMain from "./loginPage/Login";
import Home from "./Home";
import FEARequest from "./requestPage/FeaRequest";
import BaseQueue from "./basicQueuePage/BasicQueue";
import WorkQueue from "./workQueuePage/WorkQueue";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={LoginMain} />
        <Route path="/request" component={FEARequest} />
        <Route path="/baseQueue" component={BaseQueue} />
        <Route path="/workQueue" component={WorkQueue} />
      </Switch>
    </Router>
  );
}

export default App;
