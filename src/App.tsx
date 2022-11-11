import React from "react";
import logo from "./img/Star_Wars_Logo.svg";
import cup from "./img/cup.svg";
import "./App.css";
import GetStarshipsButton from "./components/getStarshipsButton";

function App() {
  const getStarships = () => {
    console.log("get starships");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" height={300} />
        <h1>Sample React project using the SWAPI API</h1>
        <h2>
          Results are filtered to starshits with a crew size less than 10 and
          sorted by crew size
        </h2>
        <h3>
          The starship that has featured in most filmes will show a{" "}
          <img src={cup} alt="cup" height={40} />
        </h3>
        <GetStarshipsButton onClick={getStarships}>
          Get Starships
        </GetStarshipsButton>
      </header>
    </div>
  );
}

export default App;
