import React from "react";
import { render } from "@testing-library/react";
import CurrencyRate from "./CurrencyRate";
import { LoadingState } from "../exchange/exchangeSlice";

const defaultProps = {
  data: {
    fromSign: "$",
    toSign: "R",
    currentRate: 0.1,
  },
  loadingState: LoadingState.IDLE,
};

describe("CurrencySlide component", () => {
  it("renders correctly with the Idle state", () => {
    const component = render(<CurrencyRate {...defaultProps} />);

    expect(
      component.getByText(
        `${defaultProps.data.fromSign}1 = ${
          defaultProps.data.toSign
        }${defaultProps.data.currentRate.toFixed(4)}`
      )
    ).toBeInTheDocument();
  });

  it("renders correctly with the Failed state", () => {
    const failedProps = { ...defaultProps, loadingState: LoadingState.FAILED };
    const component = render(<CurrencyRate {...failedProps} />);

    expect(
      component.getByText("Failed to load currency rates")
    ).toBeInTheDocument();
  });

  it("renders correctly with the Loading state", () => {
    const loadingProps = {
      ...defaultProps,
      loadingState: LoadingState.LOADING,
    };
    const component = render(<CurrencyRate {...loadingProps} />);

    expect(component.getByText("Loading rates...")).toBeInTheDocument();
  });
});
