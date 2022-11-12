import React from "react";
import useStartshipsContext from "../hooks/useStarshipsContext";
import { StarshipWrapper } from "./styled/StarshipDetails";

const StarshipShowAll = () => {
  const { starship } = useStartshipsContext();

  const details = [];
  for (const [k, v] of Object.entries(starship)) {
    if (
      k !== "name" &&
      k !== "pilots" &&
      k !== "films" &&
      k !== "created" &&
      k !== "edited" &&
      k !== "url" &&
      k !== "cup"
    ) {
      details.push(
        <tr>
          <td valign="top">
            <strong>{k}</strong>
          </td>
          <td>{v}</td>
        </tr>
      );
    }
  }

  return (
    <>
      <h1>{starship.name}</h1>
      <StarshipWrapper>
        <table>
          <tbody>{details}</tbody>
        </table>
      </StarshipWrapper>
    </>
  );
};
export default StarshipShowAll;
