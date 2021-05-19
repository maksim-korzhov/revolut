import React from "react";
import CurrencySlider from "./features/currency_slider/CurrencySlider";
import CurrencyInput from "./features/currency_input/CurrecnyInput";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="slider-container">
          <CurrencySlider />

          <CurrencyInput name="from" prefix="–" />
        </div>

        <div className="slider-container">
          <CurrencySlider />

          <CurrencyInput disabled name="to" prefix="+" value="234" />
        </div>
      </div>
    </div>
  );
}

export default App;
