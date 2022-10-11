import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from "../components/SideBar";

describe("Sidebar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders title text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <SideBar />
      </BrowserRouter>
    );
    expect(getByText(/filter by city/i)).toBeInTheDocument();
  });
});
