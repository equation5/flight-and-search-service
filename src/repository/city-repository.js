const { City } = require('../models/index');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      const result = await City.destroy({ where: { id: cityId } });
      if (!result) throw new Error(`City with id ${cityId} not found`);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
