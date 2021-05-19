import React from "react";
import CurrencySlider from "../currencySlider/CurrencySlider";
import CurrencyInput from "../currencyInput/CurrencyInput";

import currency from "currency.js";

enum RatesEnum {
  USD = "USD",
  EUR = "EUR",
  RUB = "RUB",
  GBP = "GBP",
}

export interface CurrencyData {
  name: RatesEnum;
  sign: string;
  total: number;
}

export type Wallets = Record<string, CurrencyData>;

type Rates = Record<RatesEnum, number>;

interface Data {
  selectedFrom: RatesEnum;
  selectedTo: RatesEnum;
  wallets: Wallets;
  rates: Record<RatesEnum, Rates>;
}

const data = {
  selectedFrom: "USD",
  selectedTo: "USD",
  wallets: {
    usd: {
      name: "USD",
      sign: "$",
      total: 0,
    },
    eur: {
      name: "EUR",
      sign: "€",
      total: 0,
    },
    rub: {
      name: "RUB",
      sign: "₽",
      total: 0,
    },
    gbp: {
      name: "GBP",
      sign: "£",
      total: 0,
    },
  },
  rates: {
    USD: {
      EUR: 0.817712,
      RUB: 73.6975,
      GBP: 0.70545,
      USD: 1,
    },
    EUR: {
      EUR: 0.817712,
      RUB: 73.6975,
      GBP: 0.70545,
      USD: 1,
    },
    RUB: {
      EUR: 0.817712,
      RUB: 73.6975,
      GBP: 0.70545,
      USD: 1,
    },
    GBP: {
      EUR: 0.817712,
      RUB: 73.6975,
      GBP: 0.70545,
      USD: 1,
    },
  },
};

function getRate(rateFromName: RatesEnum, rateToName: RatesEnum) {
  return data.rates[rateFromName][rateToName];
}

function getRatedValue(rate: number, value: number) {
  return currency(value).multiply(rate).value;
}

interface IProps {}

const Exchange: React.FunctionComponent<IProps> = () => {
  const [fromWallet, setFromWallet] = React.useState(data.selectedFrom);
  const [toWallet, setToWallet] = React.useState(data.selectedTo);
  const [fromValue, setFromValue] = React.useState(0);
  const [toValue, setToValue] = React.useState(0);

  const calculateValue = (value: number) => {
    setFromValue(value);

    if (value) {
      const rate = getRate(fromWallet as RatesEnum, toWallet as RatesEnum);
      const newToValue = getRatedValue(rate, value);
      setToValue(newToValue);
    } else {
      setToValue(value);
    }
  };

  /** Reset the fromValue if we change the wallet */
  React.useEffect(() => setFromValue(0), [fromWallet]);

  /** Reset values on from wallet changes */
  React.useEffect(() => {
    setFromValue(0);
    setToValue(0);
  }, [fromWallet]);

  /** Calculate values on every wallet changes */
  React.useEffect(() => {
    calculateValue(fromValue);
  }, [toWallet]);

  return (
    <>
      <div className="slider-container">
        <CurrencySlider
          wallets={data.wallets}
          current={fromWallet}
          onChange={setFromWallet}
        />

        <CurrencyInput
          name="from"
          prefix="–"
          onChange={calculateValue}
          value={fromValue}
        />
      </div>

      <div className="slider-container">
        <CurrencySlider
          wallets={data.wallets}
          current={toWallet}
          onChange={setToWallet}
        />

        <CurrencyInput disabled name="to" prefix="+" value={toValue} />
      </div>
    </>
  );
};

export default Exchange;
