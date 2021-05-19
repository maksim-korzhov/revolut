import React from "react";
import CurrencySlider from "./features/currencySlider/CurrencySlider";
import CurrencyInput from "./features/currencyInput/CurrecnyInput";
import "./App.css";

import currency from "currency.js";

export interface CurrencyData {
  name: string;
  sign: string;
  total: number;
}

export type Wallets = Record<string, CurrencyData>;

interface Data {
  wallets: Wallets;
}

const data = {
  selected: "USD",
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
    EUR: 0.817712,
    RUB: 73.6975,
    GBP: 0.70545,
  },
};

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="slider-container">
          <CurrencySlider wallets={data.wallets} />

          <CurrencyInput name="from" prefix="–" />
        </div>

        <div className="slider-container">
          <CurrencySlider wallets={data.wallets} />

          <CurrencyInput disabled name="to" prefix="+" value="234" />
        </div>
      </div>
    </div>
  );
}

export default App;
