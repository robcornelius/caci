import { Starship, StarshipsPage } from "../types/starships";

const getPage = async (url: string): Promise<StarshipsPage> => {
  const raw = await fetch(url);
  const data = await raw.json();
  return data;
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
  return collection;
};
export default getStarshipsApi;
