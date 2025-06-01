const axios = require('axios');

export default async function handler(req, res) {
  const { amount, from, to } = req.query;

  if (!from || !to || !amount) {
    return res.status(400).json({ error: 'Faltan valores para realizar la conversión' });
  }

  if(from===to){
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


    const result = response.data.result;

    res.status(200).json({
      from,
      to,
      amount: parseFloat(amount),
      converted: result
    });

  } catch (error) {
    res.status(500).json({ error: 'Error al convertir monedas' });
  }
};
