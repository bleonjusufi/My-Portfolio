import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useState, useEffect } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm Bleon Jusufi, a Computer Science and Engineering student driven
            by a deep ambition to explore the vast possibilities where code
            meets creativity. From crafting intricate algorithms to tackling
            complex challenges, my passion fuels a commitment to continuous
            growth in the dynamic world of computer science.
          </p>
          <p>
            Confidence is my cornerstone in problem-solving and learning. I
            thrive on challenges, approaching them with unwavering assurance
            backed by meticulous preparation. Whether debugging code or
            presenting complex concepts, my poised confidence enhances
            collaborative projects and inspires those around me.
          </p>
          <p>
            In the dynamic realm of Computer Science and Engineering, I'm not
            just a student; I'm a relentless explorer ready to unravel the
            mysteries of code. This portfolio reflects my commitment to
            innovation and my passion for pushing the boundaries of what's
            possible.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
