import React from "react";

export type Starship = {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmospheric_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
  cup?: boolean;
};
export type StarshipsPage = {
  count: number;
  next: null | string;
  previous: null | string;
  results: null | Starship[];
};
export type Starships = {
  starships: Starship[];
};
export interface IStarShips {
  starships: Starships;
  setStarships: (value: Starships) => void;
}
export type StarshipProviderProps = {
  children?: React.ReactNode;
};
