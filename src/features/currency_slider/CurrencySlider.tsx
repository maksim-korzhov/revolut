import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./currency_slider.css";

import CurrencySlide from "../currency_slide/CurrencySlide";

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

interface IProps {}

const CurrencySlider: React.FunctionComponent<IProps> = () => {
  return (
    <section className="exchange">
      <Slider {...settings}>
        <div className="slider-item">
          <CurrencySlide name="RUB" sign="$" value="0.01" />
        </div>
        <div className="slider-item">
          <CurrencySlide name="GBP" sign="$" value="58.01" />
        </div>
        <div className="slider-item">
          <CurrencySlide name="EUR" sign="$" value="63.01" />
        </div>
        <div className="slider-item">
          <CurrencySlide name="USD" sign="$" value="63.01" />
        </div>
      </Slider>
    </section>
  );
};

export default CurrencySlider;
