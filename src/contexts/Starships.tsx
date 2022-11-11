import React, { useState, createContext } from "react";
import {
  IStarShips,
  Starships,
  StarshipProviderProps,
} from "../types/starships";

export const StarshipsContext = createContext({} as IStarShips);

const StarshipsProvider = ({ children }: StarshipProviderProps) => {
  const initialVal = {
    count: 0,
    next: null,
    previous: null,
    results: null,
  };
  const [starships, setStarships] = useState<Starships>(initialVal);

  return (
    <StarshipsContext.Provider value={{ starships, setStarships }}>
      {children}
    </StarshipsContext.Provider>
  );
};

export default StarshipsProvider;
