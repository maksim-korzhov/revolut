import * as React from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";

function withLengthLimit(inputObj: NumberFormatValues) {
  const { floatValue } = inputObj;
  const MAX_AT_ONCE = 10000000;
  if (floatValue && floatValue >= MAX_AT_ONCE) return false;

  return true;
}

interface IProps {
  name: string;
  disabled?: boolean;
  prefix?: string;
  value?: string;
}

const CurrencyInput: React.FunctionComponent<IProps> = ({
  name,
  disabled = false,
  prefix = "",
  value = "",
}) => {
  return (
    <NumberFormat
      allowLeadingZeros={false}
      allowNegative={false}
      className="exchangeValue"
      decimalScale={2}
      disabled={disabled}
      isAllowed={withLengthLimit}
      name={name}
      prefix={prefix}
      thousandSeparator={true}
      value={value}
    />
  );
};

export default CurrencyInput;
