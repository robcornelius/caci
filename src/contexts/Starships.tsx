import React, { useState, createContext } from "react";
import {
  IStarShips,
  Starships,
  StarshipProviderProps,
  Starship,
} from "../types/starships";

export const StarshipsContext = createContext({} as IStarShips);

const StarshipsProvider = ({ children }: StarshipProviderProps) => {
  const [starships, setStarships] = useState<Starships>({ starships: [] });
  const [starship, setStarship] = useState<Starship>({} as Starship);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  return (
    <StarshipsContext.Provider
      value={{
        starships,
        setStarships,
        starship,
        setStarship,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      {children}
    </StarshipsContext.Provider>
  );
};

export default StarshipsProvider;
