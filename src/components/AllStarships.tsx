import React from "react";
import { Starship, Starships } from "../types/starships";
import StarshipDetails from "./StarshipDetails";

const AllStarships = (allStarships: Starships) => {
  const { starships } = allStarships;
  return starships.map((ship: Starship) => {
    return <StarshipDetails shipDetails={ship} />;
  });
};
export default AllStarships;
