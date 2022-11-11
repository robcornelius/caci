import React from "react";
import logo from "./img/Star_Wars_Logo.svg";
import cup from "./img/cup.svg";
import "./App.css";
import GetStarshipsButton from "./components/getStarshipsButton";
import useStartshipsContext from "./hooks/useStarshipsContext";
import getStarshipsApi from "./api/starships";
import StarshipDetails from "./components/StarshipDetails";
import { Starship } from "./types/starships";

function App() {
  const { starships, setStarships } = useStartshipsContext();
  const getStarships = async () => {
    const returnedStarships = await getStarshipsApi(
      "https://swapi.dev/api/starships/"
    );
    const filteredStarships = returnedStarships.filter((ship: Starship) => {
      return Number(ship.crew) < 10;
    });
    const sortedStarships = filteredStarships.sort((a, b) => {
      if (a.crew.search("-") > 0) {
        a.crew.substring(a.crew.lastIndexOf("-") + 1);
      }
      if (b.crew.search("-") > 0) {
        b.crew.substring(b.crew.lastIndexOf("-") + 1);
      }
      if (parseInt(a.crew) > parseInt(b.crew)) {
        return 1;
      }
      if (parseInt(a.crew) < parseInt(b.crew)) {
        return -1;
      }
      return 0;
    });
    setStarships({ starships: sortedStarships });
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
      {starships.starships.length === 0 && <p>Loading</p>}
      {starships.starships.length !== 0 &&
        starships.starships.map((ship: any, i: number) => {
          return <StarshipDetails starships={ship} key={i} />;
        })}
    </div>
  );
}

export default App;
