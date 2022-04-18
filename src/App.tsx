import React from "react";
import "./App.css";
import Home from "./screens/home/home";

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">
              Test Interview
            </a>
          </div>
        </nav>
      </header>
      <Home />
    </div>
  );
}

export default App;
