import React, { useState } from "react";
import logo from "./img/Star_Wars_Logo.svg";
import cup from "./img/cup.svg";
import "antd/dist/antd.css";
import "./App.css";
import GetStarshipsButton from "./components/styled/getStarshipsButton";
import useStartshipsContext from "./hooks/useStarshipsContext";
import getStarshipsApi from "./api/starships";
import StarshipDetails from "./components/StarshipDetails";
import StarshipDrawer from "./components/styled/StarshipDrawer";
import StarshipShowAll from "./components/StarshipShowAll";
import LoadingSpinner from "./components/styled/LoadingSpinner";
import grid from "./img/grid.svg";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { starships, setStarships, drawerOpen, setDrawerOpen } =
    useStartshipsContext();
  const getStarships = async () => {
    setIsLoading(true);
    const returnedStarships = await getStarshipsApi(
      "https://swapi.dev/api/starships/"
    );
    setStarships({ starships: returnedStarships });
    setIsLoading(false);
  };
  const closeDrawer = () => {
    setDrawerOpen(false);
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
      {isLoading && (
        <LoadingSpinner>
          <img src={grid} alt="loading" height={50} width={50} />
        </LoadingSpinner>
      )}
      {starships.starships.length !== 0 &&
        starships.starships.map((ship: any, i: number) => {
          return <StarshipDetails starshipDetails={ship} key={i} />;
        })}
      <StarshipDrawer
        open={drawerOpen}
        placement="right"
        onClose={closeDrawer}
        title="Ship Details"
      >
        <StarshipShowAll />
      </StarshipDrawer>
    </div>
  );
}

export default App;
