import React from "react";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import Header from "./common/Header";
import Courses from "./Courses";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./common/NotFoundPage";
import ManageCourse from "./ManageCourse";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={Courses} />
        <Route path="/about" component={AboutPage} />
        <Route path="/manageCourse" component={ManageCourse} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
