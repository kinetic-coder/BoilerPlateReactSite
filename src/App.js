import React from "react";
import "./styles.css";
import Page from "./components/Page";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// views
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";

export default function App() {
  return (
    <Page>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </Page>
  );
}
