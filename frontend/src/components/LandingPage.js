import React from "react";
import "./LandingPage.css";
import backgroundImage from "../images/landingPagePic.jpg";

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Twitter Clone</h1>
        <nav>
          <a href="LandingPage">Home</a>
          <a href="About">About</a>
          <a href="Contact">Contact</a>
        </nav>
      </header>
      <img
        src={backgroundImage}
        alt="background"
        className="backgroundd-image"
      />
      <main>
        <h2>Welcome to Twitter Clone</h2>
        <p>Join the conversation! Share your thoughts with the world.</p>
        <button className="btn">Get started</button>
      </main>
    </div>
  );
}

export default LandingPage;
