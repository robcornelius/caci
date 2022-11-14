import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the header", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Sample React project using the SWAPI API/i
  );
  expect(linkElement).toBeInTheDocument();
});
