import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CurrencySlider.module.css";

// import { Wallets } from "";

import CurrencySlide from "../currencySlide/CurrencySlide";

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

// TODO: Correct wallets type
interface IProps {
  current: string;
  wallets: any;
  onChange: Function;
}

/**
 * Helper function. Renders wallets data.
 * @param wallet
 * @returns
 */
const renderCurrencySlide = ({ name, sign, total }: any) => (
  <div className="slider-item" key={name}>
    <CurrencySlide name={name} sign={sign} value={total} />
  </div>
);

/**
 * Renders slides with wallets data.
 * @param data
 * @returns
 */
const CurrencySlider: React.FunctionComponent<IProps> = ({
  wallets,
  onChange,
}) => {
  return (
    <section className="exchange">
      <Slider
        {...settings}
        afterChange={(slideNumber) => {
          const currentWalletKey = Object.keys(wallets)[slideNumber];
          const currentWallet = wallets[currentWalletKey];
          onChange(currentWallet.name);
        }}
      >
        {Object.keys(wallets).map((key) => renderCurrencySlide(wallets[key]))}
      </Slider>
    </section>
  );
};

export default CurrencySlider;
