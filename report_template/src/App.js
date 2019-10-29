import React from "react";
import LoginMain from "./loginPage/Login";
import FEARequest from "./requestPage/FeaRequest";
import BaseQueue from "./basicQueuePage/BasicQueue";
import WorkQueue from "./workQueuePage/WorkQueue";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="font-sans bg-gray-100 flex flex-col items-center justify-start">
      <h1 className=" text-4xl p-5 mb-5 bg-blue-900 w-full text-white font-bold">
        {" "}
        FEA Request{" "}
      </h1>
      <ul className="flex items-around w-lg ">
        <Link to="/">
          <li>Login</li>
        </Link>
        <Link to="/request">
          <li>Fea Request</li>
        </Link>
        <Link to="/baseQueue">
          <li>Basic Queue</li>
        </Link>
        <Link to="/workQueue">
          <li>Working Queue</li>
        </Link>
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={LoginMain} />
        <Route path="/request" component={FEARequest} />
        <Route path="/baseQueue" component={BaseQueue} />
        <Route path="/workQueue" component={WorkQueue} />
      </Switch>
    </Router>
  );
}

export default App;
