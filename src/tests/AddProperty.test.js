import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddProperty from "../components/AddProperty";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    render(
      <BrowserRouter>
        <AddProperty />
      </BrowserRouter>
    );
    const text = screen.getByText(/add property page/i);
    expect(text).toBeInTheDocument();
  });
});
