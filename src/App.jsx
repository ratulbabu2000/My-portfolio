import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Intro/main";
import Services from "./Components/Services/Services";
import Exprinces from "./Components/Exprincese/exprincese";
import Works from "./Components/Work/works";
import Portfolio from "./Components/Portfolio/portfolio";
import Contect from "./Components/Contect/contect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
      <Exprinces />
      <Works />
      <Portfolio />
      <Contect />
    </div>

  );
}

export default App;
