const { where } = require('sequelize');
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

async updateCity(cityId,data)
{
  try{
const city=await City.update(data,{
  where:{
    id:cityId
  }
}
);
return city;
  }

  catch(error)
  {
    console.log("somethin wrong in repository");
    throw(eroor);
  }
}

async getCity(cityId)
{
  try{
const city=await City.findbyPk(cityId);
return city;
  }
  catch(error)
  {
    console.log("something wrong in repo layer");
    throw(error);
  }
}
}
module.exports = CityRepository;
