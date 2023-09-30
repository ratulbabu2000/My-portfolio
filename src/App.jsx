import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Intro/main";
import Services from "./Components/Services/Services";
import Exprinces from "./Components/Exprincese/exprincese";
import Works from "./Components/Work/works";
import Portfolio from "./Components/Portfolio/portfolio";
import Contect from "./Components/Contect/contect";
import Footer from "./Components/footer/footer";
import "./App.css";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background : darkMode ? "black" : '' ,
      color : darkMode ? "white" : ''
    }}
    >
      <Header />
      <Main />
      <Services />
      <Exprinces />
      <Works />
      <Portfolio />
      <Contect />
      <Footer />
    </div>

  );
}

export default App;
