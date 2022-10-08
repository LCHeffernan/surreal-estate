import React from "react";
import { render, screen } from "@testing-library/react";
import AddProperty from "../components/AddProperty";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AddProperty />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    render(<AddProperty />);
    const text = screen.getByText(/add property page/i);
    expect(text).toBeInTheDocument();
  });
});
