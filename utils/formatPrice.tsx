export const formatPrice = new Intl.NumberFormat(undefined, {
  style: `currency`,
  currency: `PLN`,

  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
