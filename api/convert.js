import axios from 'axios';

export default async function handler(req, res) {
  const { amount, from, to } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Faltan valores para realizar la conversión' });
  }

  if (from === to) {
    return res.status(200).json({
      from,
      to,
      amount: parseFloat(amount),
      converted: parseFloat(amount)
    });
  }

  try {
    const response = await axios.get('https://api.exchangerate.host/convert', {
      params: { from, to, amount }
    });

    if (!response.data || response.data.result === undefined) {
      console.log("Respuesta inválida:", response.data);
      return res.status(500).json({ error: 'No se pudo obtener el tipo de cambio' });
    }

    res.status(200).json({
      from,
      to,
      amount: parseFloat(amount),
      converted: response.data.result
    });

  } catch (error) {
    console.error("Error al llamar a la API:", error.message);
    res.status(500).json({ error: 'Error al convertir monedas' });
  }
}
