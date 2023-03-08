import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Twitter Clone</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <h2>Welcome to Twitter Clone</h2>
        <p>Join the conversation! Share your thoughts with the world.</p>
        <button className="btn">Get started</button>
      </main>
    </div>
  );
}

export default LandingPage;
