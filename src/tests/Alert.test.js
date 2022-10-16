import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  xit("renders correctly", () => {
    const { asFragment } = render(<Alert message="" />);
    expect(asFragment()).toMatchSnapshot();
  });

  xit("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  xit("displays a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!!" success />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe("Success!!!!");
  });
});
