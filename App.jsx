import React from "react";

import About from "./portfolio/About";
import Footer from "./portfolio/Footer";
import Header from "./portfolio/Header";
import Home from "./portfolio/Home";
import Portfolio from "./portfolio";

import "./styles.css";
const siteProps = {
    name: "Diksha Hatwar",
    title: "Front-end Developer",
    email: "dikshahatwar16@gmail.com",
    gitHub: "Dikshahatwar",
    
    linkedIn: "Diksha Hatwar",

  };
  
  const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";
 
  const App = () => {
    return (
      <div id="main">
        <Header />
        <Home name={siteProps.name} title={siteProps.title} />
        <About />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    );
  };
  
  export default App;
