const models = require("../database/models");

const createMoto = async (req, res) => {
  try {
    const moto = await models.Moto.create(req.body);
    return res.status(201).json({
      moto
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllMotos = async (req, res) => {
  console.log('Obteniendo todas las motos');
  try {
    const motos = await models.Moto.findAll({
      include: [
      ]
    });
    return res.status(200).json({ motos });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createMoto,
  getAllMotos
};
