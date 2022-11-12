import { Starship, StarshipsPage } from "../types/starships";

const getPage = async (url: string): Promise<StarshipsPage> => {
  const raw = await fetch(url);
  const data = await raw.json();
  return data;
};

const removeRanges = (val: string) => {
  if (val.indexOf("-") > 0) {
    val = val.substring(val.lastIndexOf("-") + 1);
  }
  return val;
};

const filterStarships = (collection: Starship[]) => {
  return collection.filter((ship: Starship) => {
    ship.crew = removeRanges(ship.crew);
    return parseInt(ship.crew) < 10;
  });
};
const sortedStarships = (collection: Starship[]) => {
  const sortFunction = (a: Starship, b: Starship) => {
    a.crew = removeRanges(a.crew);
    b.crew = removeRanges(b.crew);
    if (parseInt(a.crew) > parseInt(b.crew)) {
      return 1;
    }
    if (parseInt(a.crew) < parseInt(b.crew)) {
      return -1;
    }
    return 0;
  };
  return collection.sort(sortFunction);
};
const awardCup = (collection: Starship[]) => {
  let cup = 0;
  let idx = 0;
  collection.forEach((ship, i) => {
    if (ship.films.length > cup) {
      cup = ship.films.length;
      idx = i;
    }
  });
  collection[idx].cup = true;
  return collection;
};

const getStarshipsApi = async (
  url: string,
  collection: Starship[] = []
): Promise<Starship[]> => {
  const { next, results } = await getPage(url);
  if (results !== null) {
    collection = [...collection, ...results];
  }
  if (next !== null) {
    return getStarshipsApi(next, collection);
  }
  collection = filterStarships(collection);
  collection = sortedStarships(collection);
  collection = awardCup(collection);
  return collection;
};
export default getStarshipsApi;
