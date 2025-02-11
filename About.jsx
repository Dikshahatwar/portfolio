import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a Web development student studying at RTMNU University. I enjoy creating unique websites and simplistic user interfaces in creative ways.";

const skillsList = [
  "Web design",
  "HTML",
  "CSS",
  "JavaScript",
];

const detailOrQuote =
  "I'm currently an enthusiastic second-year Computer Engineering student at Rashtrasant Tukdoji Maharaj University Nagpur";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{"I am actively seeking an internship opportunity. Driven by a passion for technology and a genuine eagerness to learn, I'm keen to enhance my skills and gain hands-on experience to kick-start my career. I'm always ready to embrace new challenges. I'm excited to contribute my knowledge and energy to a dynamic team, while continually improving and broadening my horizons in the field of computer engineering. Let's build something great together!"}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

