import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

describe("NavBar", () => {
  xit("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  xit("renders correct text", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const text = screen.getByText(/view properties/i);
    expect(text).toBeInTheDocument();
  });

  xit("renders the image", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    expect(screen.getByTestId("logo")).toHaveClass("logo");
  });
});
