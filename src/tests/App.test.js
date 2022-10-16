import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

describe("App", () => {
  xit("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  xit("renders learn react link", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/surreal estate/i);
    expect(linkElement).toBeInTheDocument();
  });
});
