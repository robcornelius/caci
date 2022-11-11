import React from "react";

const StarshipDetails = (starshipDetails: any) => {
  const { starships } = starshipDetails;
  return (
    <p>
      name = {starships.name} = {starships.crew}
    </p>
  );
};
export default StarshipDetails;
