import React, { useState } from "react";
import web from "./web.png";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [ham, setHam] = useState(false);
  return (
    <>
    <div className="main">
      <div className="Container">
        <div className="Img-div">
          <img src={web} />
          <div>
            <h3>Web Perfection</h3>
            <p>Perfection is in our code.</p>
          </div>
        </div>
        {ham ? (
          <div className="h21">
            <h2 onClick={() => setHam(!ham)}>
              <FaArrowRight />
            </h2>
          </div>
        ) : (
          <div className="h2">
            <h2 onClick={() => setHam(!ham)} >
              <GiHamburgerMenu />
            </h2>
          </div>
        )}
       

        <div className="Button-div">
          <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Contect</Link>
        </div>
      </div>
    </div>
    {ham && <div className="smallscreen">
    <Link to="/">Home</Link>
          <Link to="/">About us</Link>
          <Link to="/">Contect</Link>
    </div>}
    </>
  );
}
