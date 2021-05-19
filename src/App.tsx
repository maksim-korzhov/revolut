import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./features/slider/slider.css";

import NumberFormat, { NumberFormatValues } from "react-number-format";

import "./App.css";

function App() {
  const settings = {
    arrows: false,
    dots: true,
    easing: "ease-in-out",
    infinite: true,
    mobileFirst: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  function withLengthLimit(inputObj: NumberFormatValues) {
    const { floatValue } = inputObj;
    const MAX_AT_ONCE = 10000000;
    if (floatValue && floatValue >= MAX_AT_ONCE) return false;

    return true;
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="slider slider--light">
          <section className="exchange">
            <Slider {...settings}>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">GBP</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">EUR</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">USD</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
            </Slider>
          </section>

          <NumberFormat
            className="exchangeValue"
            thousandSeparator={true}
            decimalScale={2}
            isAllowed={withLengthLimit}
            prefix="–"
          />
        </div>

        <div className="slider slider--light">
          <section className="exchange">
            <Slider {...settings}>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">GBP</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">EUR</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
              <div className="slider-item">
                <div className="exchange-wrapper">
                  <div className="exchange-content">
                    <h3 className="exchange-currency">USD</h3>
                    <p className="exchange-inwallet">You have $58.63</p>
                  </div>
                </div>
              </div>
            </Slider>
          </section>

          <NumberFormat
            className="exchangeValue"
            thousandSeparator={true}
            decimalScale={2}
            isAllowed={withLengthLimit}
            disabled
            prefix="+"
            value="234"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
