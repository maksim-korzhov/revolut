import currency from "currency.js";

/**
 * Convert value using the current rate.
 * @param rate
 * @param value
 * @returns
 */
export function getRatedValue(rate: number, value: number) {
  return currency(value).multiply(rate).value;
}
