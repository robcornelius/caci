import { useContext } from "react";
import { StarshipsContext } from "../contexts/Starships";

const useStartshipsContext = () => {
  const context = useContext(StarshipsContext);
  if (context === undefined) {
    throw new Error("Starships context UNDEFINED");
  }
  return context;
};
export default useStartshipsContext;
