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
  value?: number;
  onChange?: Function;
}

/**
 * Display the input for the currency
 * @returns
 */
const CurrencyInput: React.FunctionComponent<IProps> = ({
  name,
  onChange,
  value,
  disabled = false,
  prefix = "",
}) => {
  const settings = {} as any;
  if (value !== undefined) settings.value = value;
  if (onChange !== undefined)
    settings.onValueChange = ({ floatValue }: any) =>
      onChange && onChange(floatValue);

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
      {...settings}
    />
  );
};

export default CurrencyInput;
