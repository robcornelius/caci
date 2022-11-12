import React from "react";
import useStartshipsContext from "../hooks/useStarshipsContext";
import cup from "../img/cup.svg";
import {
  StarshipTable,
  StarshipWrapper,
  ViewMoreButton,
} from "./styled/StarshipDetails";

const StarshipDetails = (starship: any) => {
  const { setStarship, setDrawerOpen } = useStartshipsContext();
  const { starshipDetails } = starship;

  const openDrawer = () => {
    setStarship(starshipDetails);
    setDrawerOpen(true);
  };

  return (
    <StarshipWrapper>
      <StarshipTable width="100%" border={1}>
        <tbody>
          <tr>
            <td className="header" width={200} valign="top">
              Name &amp; Model
            </td>
            <td width={350}>
              {starshipDetails.name}
              <br />
              {starshipDetails.model}
            </td>
            <td className="header" width={100} valign="top">
              Manufacturer
            </td>
            <td valign="top" width={250}>
              {starshipDetails.manufacturer}
            </td>
            <td className="header" width={50} valign="top">
              Cost
            </td>
            <td width={100} valign="top">
              {starshipDetails.cost_in_credits}
            </td>
            <td width={200} valign="top">
              <ViewMoreButton onClick={openDrawer}>View Details</ViewMoreButton>
            </td>
            <td valign="top" width={40}>
              {starshipDetails.cup && <img src={cup} alt="cup" height={30} />}
            </td>
          </tr>
        </tbody>
      </StarshipTable>
    </StarshipWrapper>
  );
};
export default StarshipDetails;
