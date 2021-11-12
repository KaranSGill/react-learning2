import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const ReactRouter = () => {
  return (
    <div>
      <Router>
        <div
          style={{
            marginTop: "2rem",
            color: "black",
            fontSize: "2rem",
            textDecoration: "none",
            marginRight: "1rem",
          }}
        >
          <Link style={{ marginRight: "1rem" }} to="/">
            About
          </Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
};

export default ReactRouter;
