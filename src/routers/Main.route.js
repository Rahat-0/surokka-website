import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Navber } from "../components/homeComponent/Navber";

//page components import starts from here
import Home from "../pages/Home";
import Card from "../pages/Card";
import Certificate from "../pages/Certificate";
import FAQ from "../pages/FAQ";
import Manual from "../pages/Manual";
import PassportReg from "../pages/PassportReg";
import Registration from "../pages/Registration";
import Status from "../pages/Status";
import Verifycertificate from "../pages/VerifyCertificate";
import NotFound from "../pages/NotFound";
//page components import end here.

export default function MainRoute() {
  return (
    <Router>
      <Navber />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/card" component={Card} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/manual" component={Manual} />
        <Route exact path="/registrationpassport" component={PassportReg} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/verifycertificate" component={Verifycertificate} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
