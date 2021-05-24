import React from "react";
import { LoadingState } from "../exchange/exchangeSlice";

interface IProps {
  data: {
    fromSign: string;
    toSign: string;
    currentRate: number;
  };
  loadingState: LoadingState;
}

const CurrencyRate: React.FunctionComponent<IProps> = ({
  loadingState,
  data,
}) => {
  const { fromSign, toSign, currentRate } = data;

  switch (loadingState) {
    case LoadingState.FAILED:
      return <div className="error">Failed to load currency rates</div>;

    case LoadingState.LOADING:
      return <div className="current-rate">Loading rates...</div>;

    default:
      return (
        <div className="current-rate">
          {`${fromSign}1 = ${toSign}${currentRate.toFixed(4)}`}
        </div>
      );
  }
};

export default CurrencyRate;
