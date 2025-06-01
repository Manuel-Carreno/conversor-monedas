const form = document.getElementById('forms');
const result = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const amount = document.getElementById('amount').value;
  const from = document.getElementById('from-currency-select').value;
  const to = document.getElementById('to-currency-select').value;

  try {
    const res = await fetch(`/api/convert?amount=${amount}&from=${from}&to=${to}`);
    const data = await res.json();

    if (data.error) {
      result.textContent = 'Error: ' + data.error;
    } else {
      result.textContent = `${data.amount} ${data.from} = ${data.converted} ${data.to}`;
    }

  } catch (err) {
    result.textContent = 'Hubo un error al convertir';
  }
});