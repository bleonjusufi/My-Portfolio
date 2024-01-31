import Loader from "react-loaders";
import { useState, useEffect } from "react";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            I possess a strong skill set in web development, encompassing HTML,
            CSS, JavaScript, Node.js, and React.js. My proficiency lies in
            creating dynamic and visually appealing web applications.
          </p>
          <p>
            While not a designer, I possess a keen eye for aesthetics and
            specialize in responsive, mobile-first web design. I prioritize code
            optimization for an enhanced user experience. Beyond project
            completion, I am dedicated to providing ongoing support and ensure
            unwavering commitment throughout the development process.
          </p>
        </div>
        <section id="services" className="services-section">
          <div className="service-item">
            <h3>HTML5</h3>
            <p>
              Proficient in structuring content and creating semantic markup
              using HTML to build the foundation of web applications.
            </p>
          </div>
          <div className="service-item">
            <h3>CSS3</h3>
            <p>
              Skilled in leveraging CSS to design visually appealing and
              responsive user interfaces, ensuring an engaging and consistent
              user experience.
            </p>
          </div>
          <div className="service-item">
            <h3>JavaScript</h3>
            <p>
              Experienced in utilizing JavaScript to implement interactive and
              dynamic features, enhancing the functionality and interactivity of
              web applications.
            </p>
          </div>
          <div className="service-item">
            <h3>React</h3>
            <p>
              Adept at developing robust and modular user interfaces with
              React.js, leveraging its component-based architecture for
              efficient and scalable front-end solutions.
            </p>
          </div>
          <div className="service-item">
            <h3>Node Js</h3>
            <p>
              Capable of building server-side applications and APIs using
              Node.js, ensuring seamless communication between the front-end and
              back-end components of web applications.
            </p>
          </div>
        </section>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
