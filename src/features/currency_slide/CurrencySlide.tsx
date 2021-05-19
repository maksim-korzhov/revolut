import * as React from "react";

interface IProps {
  name: string;
  sign: string;
  value: string;
}

const CurrencySlide: React.FunctionComponent<IProps> = ({
  name,
  sign,
  value,
}) => {
  return (
    <div className="exchange-wrapper">
      <div className="exchange-content">
        <h3 className="exchange-currency">{name}</h3>
        <p className="exchange-inwallet">{`You have ${sign}${value}`}</p>
      </div>
    </div>
  );
};

export default CurrencySlide;
