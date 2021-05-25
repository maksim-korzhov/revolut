import * as React from "react";
import Slider from "react-slick";
import CurrencySlide from "../currencySlide/CurrencySlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CurrencySlider.css";

import { RatesEnum, Wallets } from "../exchange/exchangeSlice";

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

interface IProps {
  current: string;
  wallets: Wallets;
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

const afterChange = (
  wallets: Wallets,
  slideNumber: number,
  callback: Function
) => {
  const currentWalletKey = Object.keys(wallets)[slideNumber];
  const currentWallet = wallets[currentWalletKey as RatesEnum];
  callback(currentWallet.name);
};

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
        afterChange={(slideNumber: number) =>
          afterChange(wallets, slideNumber, onChange)
        }
      >
        {Object.keys(wallets).map((key: string) =>
          renderCurrencySlide(wallets[key as RatesEnum])
        )}
      </Slider>
    </section>
  );
};

export default CurrencySlider;
