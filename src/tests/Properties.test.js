import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Properties />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    render(
      <BrowserRouter>
        <Properties />
      </BrowserRouter>
    );
    const text = screen.getByText(/properties page/i);
    expect(text).toBeInTheDocument();
  });
});
