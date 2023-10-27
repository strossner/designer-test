export const formatCurrency = (value: number) => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
  return formatter.format(value);
};
