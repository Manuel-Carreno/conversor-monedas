import axios from 'axios';

export async function handleConversion(req, res) {
  const { from, to, amount } = req.query;

  if (!from || !to || isNaN(amount)) {
    return res.status(400).json({ error: 'No hay datos suficientes para realizar la conversion' });
  }

  if (from === to) {
    return res.json({
      from,
      to,
      amount: Number(amount),
      converted: Number(amount),
    });
  }

  try {
    const response = await axios.get('https://api.frankfurter.app/latest', {
      params: {
        amount,
        from,
        to,
      },
    });

    const converted = response.data.rates[to];

    res.json({
      from,
      to,
      amount: Number(amount),
      converted,
    });
  } catch (error) {
    console.error('Error al convertir moneda:', error.message); //para debugear
    res.status(500).json({ error: 'Error al convertir moneda' });
  }
}
