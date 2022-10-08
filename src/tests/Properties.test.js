import React from "react";
import { render, screen } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Properties />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct text", () => {
    render(<Properties />);
    const text = screen.getByText(/properties page/i);
    expect(text).toBeInTheDocument();
  });
});
