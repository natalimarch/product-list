import React from "react";
import "./App.css";
import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
