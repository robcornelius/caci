import React, { useState, createContext } from "react";
import {
  IStarShips,
  Starships,
  StarshipProviderProps,
} from "../types/starships";

export const StarshipsContext = createContext({} as IStarShips);

const StarshipsProvider = ({ children }: StarshipProviderProps) => {
  const [starships, setStarships] = useState<Starships>({ starships: [] });

  return (
    <StarshipsContext.Provider value={{ starships, setStarships }}>
      {children}
    </StarshipsContext.Provider>
  );
};

export default StarshipsProvider;
