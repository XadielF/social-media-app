import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./components/LandingPage";

function App() {
  const [tweets, setTweet] = useState([]);

  useEffect(() => {
    axios
      .get("/api/tweets")
      .then((response) => {
        setTweet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
