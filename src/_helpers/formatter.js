export function currencyFormatter(amount) {
  if (Number.isNaN(Number(amount))) return "N/A";
  const formatter = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" });
  return formatter.format(amount);
}
