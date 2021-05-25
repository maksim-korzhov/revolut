import React from "react";
import { render } from "@testing-library/react";
import CurrencySlide from "./CurrencySlide";

const defaultProps = {
  name: "USD",
  sign: "$",
  value: "10.01",
};

describe("CurrencySlide component", () => {
  it("renders correctly with the default props", () => {
    const component = render(<CurrencySlide {...defaultProps} />);

    expect(component).toMatchSnapshot();
  });
});
