"use client";

import { formatCurrencyString as rowFormatCurrencyString } from "use-shopping-cart/core";

export function formatCurrencyString(value: number) {
  return rowFormatCurrencyString({ value, currency: "JPY", language: "JPY" });
}
