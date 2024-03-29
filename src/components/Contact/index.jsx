import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    emailjs
      .send(
        "service_n9dd3qc",
        "template_y0x39ev",
        templateParams,
        "3Fe94ZCU3b6hfgTjU"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.href = "/";
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Thanks for visiting my portfolio! I am currently seeking internship
            opportunities and would love to discuss potential collaborations. If
            you have any available positions or questions, please feel free to
            reach out using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} autoComplete="off">
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bleon Jusufi,
          <br />
          Republic of Kosova,
          <br />
          Ferhat Dragaj 66, 10000 <br />
          Prishtine <br />
          <br />
          <span>bjusufi7@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[42.6629, 21.1655]} zoom={10}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[42.6629, 21.1655]}>
              <Popup>Bleon lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
