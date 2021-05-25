import React from "react";
import { render } from "@testing-library/react";
import CurrencySlider from "./CurrencySlider";
import { initialState } from "../exchange/exchangeSlice";

const defaultValues = {
  current: "USD",
  wallets: initialState.wallets,
  onChange: () => false,
};

describe("CurrencySlider component", () => {
  it("renders correctly with the default props", () => {
    const component = render(<CurrencySlider {...defaultValues} />);

    expect(component).toMatchSnapshot();
  });
});
