import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../image/down-arrow.svg"; 

import image from "programmer girl.jpg";

const imageAltText = "Adult female in office setting leaning against a glass wall while holding a platinum Microsoft Surface Pro 7 in tablet mode preparing to write with Microsoft Surface Pen";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={../image/desk.jpg"} alt="background" /> 
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Downward pointing arrow" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "Diksha Hatwar",
  title: "Web Developer",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
