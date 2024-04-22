import React from "react";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/#" className="logo">
          THEWEBDESIGNER
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default App;
