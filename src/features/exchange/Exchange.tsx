import React from "react";
import CurrencySlider from "../currencySlider/CurrencySlider";
import CurrencyInput from "../currencyInput/CurrencyInput";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectFromToWallets,
  selectWallets,
  selectCurrentRate,
  setWallets,
  exchangeValue,
} from "./exchangeSlice";
import { getRatedValue } from "../../helpers/converters";

interface IProps {}

const Exchange: React.FunctionComponent<IProps> = () => {
  const wallets = useAppSelector(selectWallets);
  const [fromWallet, toWallet] = useAppSelector(selectFromToWallets);
  const currentRate = useAppSelector(selectCurrentRate(fromWallet, toWallet));
  const dispatch = useAppDispatch();

  const [fromValue, setFromValue] = React.useState(0);
  const [toValue, setToValue] = React.useState(0);

  /**
   * Calculate "to" value using the current rate
   * @param value
   */
  const calculateValue = (value: number) => {
    setFromValue(value);

    if (value) {
      const newToValue = getRatedValue(currentRate, value);
      setToValue(newToValue);
    } else {
      setToValue(value);
    }
  };

  /** Reset values on from wallet changes */
  React.useEffect(() => {
    setFromValue(0);
    setToValue(0);
  }, [fromWallet]);

  // /** Calculate values on every wallet changes */
  React.useEffect(() => {
    calculateValue(fromValue);
  }, [toWallet]);

  return (
    <>
      <div className="slider-container">
        <CurrencySlider
          wallets={wallets}
          current={fromWallet}
          onChange={(from: string) => dispatch(setWallets([from, toWallet]))}
        />

        <CurrencyInput
          maxValue={wallets[fromWallet].total}
          name="from"
          prefix="–"
          onChange={calculateValue}
          value={fromValue}
        />
      </div>

      <div className="slider-container">
        <CurrencySlider
          wallets={wallets}
          current={toWallet}
          onChange={(to: string) => dispatch(setWallets([fromWallet, to]))}
        />

        <CurrencyInput disabled name="to" prefix="+" value={toValue} />
      </div>

      <footer className="footer">
        <button
          className="btn btn-exchange"
          disabled={!fromValue || fromWallet === toWallet}
          onClick={() => {
            dispatch(exchangeValue(fromValue));
            setFromValue(0);
            setToValue(0);
          }}
        >
          Exchange
        </button>
      </footer>
    </>
  );
};

export default Exchange;
