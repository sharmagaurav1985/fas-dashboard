import React from "react";
import HomePage from "../components/HomePage";
import AboutPage from "../components/AboutPage";
import Header from "./common/Header";
import NumberOfClients from "./NumberOfClients";
import Courses from "./Courses";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/courses") return <Courses />;
    if (route === "/numberOfClients") return <NumberOfClients />;
    else return <HomePage />;
  }
  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
