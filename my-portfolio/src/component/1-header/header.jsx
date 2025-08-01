
import React, { useState } from "react";
import "./header.css";

export default function Header() {
  

  return (
    <header className="navbar">
      <div className="logo"><img src="main-logo.png"></img></div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#certificates-container">Certificates</a>
        <a href="#skills-container">Skills</a>
        <a href="#project-container">Projects</a>
        <a href="#contact-container">Contact</a>
      </nav>

     
    </header>
  );
}
