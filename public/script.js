const form = document.getElementById('forms');
const result = document.getElementById('result');

const availabeRates = {
  USD: { USD: 1, EUR: 0.93, JPY: 157.35, GBP: 0.79, AUD: 1.51, CAD: 1.36, CHF: 0.91, CNH: 7.25, HKD: 7.82, NZD: 1.63, COP: 3900, MXN: 19.61 },
  EUR: { USD: 1.08, EUR: 1, JPY: 168.87, GBP: 0.85, AUD: 1.62, CAD: 1.47, CHF: 0.98, CNH: 7.78, HKD: 8.40, NZD: 1.75, COP: 4200, MXN: 21.74},
  JPY: { USD: 0.0064, EUR: 0.0059, JPY: 1, GBP: 0.005, AUD: 0.0096, CAD: 0.0087, CHF: 0.0058, CNH: 0.046, HKD: 0.050, NZD: 0.010, COP: 24.8, MXN: 0.1342 },
  GBP: { USD: 1.27, EUR: 1.18, JPY: 199.5, GBP: 1, AUD: 1.89, CAD: 1.73, CHF: 1.15, CNH: 9.18, HKD: 9.85, NZD: 2.06, COP: 4900, MXN: 26.32 },
  AUD: { USD: 0.66, EUR: 0.62, JPY: 105.3, GBP: 0.53, AUD: 1, CAD: 0.91, CHF: 0.61, CNH: 4.87, HKD: 5.20, NZD: 1.09, COP: 2600, MXN:12.5 },
  CAD: { USD: 0.74, EUR: 0.68, JPY: 115.3, GBP: 0.58, AUD: 1.10, CAD: 1, CHF: 0.67, CNH: 5.35, HKD: 5.71, NZD: 1.20, COP: 2900, MXN: 14.08 },
  CHF: { USD: 1.10, EUR: 1.02, JPY: 171.6, GBP: 0.87, AUD: 1.64, CAD: 1.49, CHF: 1, CNH: 7.98, HKD: 8.51, NZD: 1.79, COP: 4200, MXN: 23.26},
  CNH: { USD: 0.14, EUR: 0.13, JPY: 21.5, GBP: 0.11, AUD: 0.21, CAD: 0.19, CHF: 0.13, CNH: 1, HKD: 1.07, NZD: 0.22, COP: 540, MXN:2.70 },
  HKD: { USD: 0.13, EUR: 0.12, JPY: 20.1, GBP: 0.10, AUD: 0.19, CAD: 0.18, CHF: 0.12, CNH: 0.93, HKD: 1, NZD: 0.21, COP: 500, MXN: 2.44 },
  NZD: { USD: 0.61, EUR: 0.57, JPY: 98.5, GBP: 0.49, AUD: 0.91, CAD: 0.83, CHF: 0.56, CNH: 4.55, HKD: 4.78, NZD: 1, COP: 2300, MXN: 11.63 },
  COP: { USD: 0.00026, EUR: 0.00024, JPY: 0.040, GBP: 0.00020, AUD: 0.00038, CAD: 0.00034, CHF: 0.00024,CNH: 0.00185, HKD: 0.0020, NZD: 0.00044, COP: 1, MXN: 0.00468 },
  MXN: { USD: 0.051, EUR: 0.046, JPY: 7.45, GBP: 0.038, AUD: 0.080, CAD: 0.071, CHF: 0.043, CNH: 0.37, HKD: 0.41, NZD: 0.086, COP: 213.7, MXN: 1}
};


form.addEventListener ('submit', (e) => {
  e.preventDefault();

  const amount= parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('from-currency-select').value;
  const to= document.getElementById('to-currency-select').value;

  if(amount<0) {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "The amount must be positive",
    timer: 2500,
  });
  return;
}
  const rate =availabeRates[from][to];

  const converted = amount*rate;
  result.textContent= `${amount} ${from} = ${converted.toFixed(2)} ${to}`;

  const extraMessage = document.getElementById('extra-message');
  extraMessage.innerHTML = `
  Remember these values are an approximation.<br>
  For more info visit: <a href="https://www.google.com/search?q=google+exchange+rate" target="_blank">Google Exchange Rate</a>`;

  extraMessage.style.color = "white"


})





