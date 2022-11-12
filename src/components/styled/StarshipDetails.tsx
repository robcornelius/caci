import styled from "styled-components";

export const StarshipWrapper = styled.div`
  border: 2px solid rgb(255, 233, 31);
  border-radius: 4px;
  margin: 0 auto 2.5% auto;
  padding: 1rem;
  max-width: 1280px;
  & .header {
    font-weight: bold;
  }
`;
export const StarshipTable = styled.table`
  color: rgb(255, 233, 31);
  border-color: rgb(255, 233, 31);
`;
export const ViewMoreButton = styled.button`
  background-color: rgb(255, 233, 31);
  color: black;
  padding: 0.6rem;
  border: 0;
  border-radius: 3px;
`;
