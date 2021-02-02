import React from "react";
import "./App.css";
import Directory from "./components/Directory.js";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container-fluid bg-dark text-light px-auto">
          <h1>Employee Directory</h1>
        </div>
      </header>
      <section>
        <div className="container text-dark py-3">
          <Directory />
        </div>
      </section>
      <footer>
        <div className="container-fluid bg-dark text-light px-auto">
          <h2><i className="fa fa-copyright" aria-hidden="true"></i> Copyright {new Date().getFullYear()}</h2>
        </div>
      </footer>
    </div>
  );
}

export default App;
