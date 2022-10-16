import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "2 bed",
    type: "cottage",
    bathrooms: "1",
    bedrooms: "3",
    price: "50000",
    city: "Leeds",
    email: "test@codes.com",
  };
  xit("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  xit("renders title field text", () => {
    const { getByText, getByTestId } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText("2 bed")).toHaveClass("title");
    expect(getByText("cottage-Leeds")).toHaveClass("type-and-city");
    expect(getByText("1")).toHaveClass("bathrooms");
    expect(getByTestId("bath-icon")).toHaveClass("bathIcon");
    expect(getByText("3")).toHaveClass("bedrooms");
    expect(getByTestId("bed-icon")).toHaveClass("bedIcon");
    expect(getByText("50000")).toHaveClass("price");
    expect(getByTestId("sterling-icon")).toHaveClass("sterlingIcon");
    expect(getByTestId("envelope-icon")).toHaveClass("envelopeIcon");
  });
});
