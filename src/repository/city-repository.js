const { Op } = require('sequelize');

const { City } = require('../models/index');

class CityRepository {

    async createCity({ name }) { 
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
     async updateCity(cityId, data) {
        try {
            // Check if data and data.name are defined
            if (!data || !data.name) {
                throw new Error("Update data is missing or invalid");
            }
            // Find city by its ID
            const city = await City.findByPk(cityId);
            
            // If city is not found, throw an error
            if (!city) {
                throw new Error(`City with ID ${cityId} not found`);
            }
    
            // Update city name
            city.name = data.name;
            await city.save();
    
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    
    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities() { 
        try {
              const cities = await City.findAll();
              return cities;
            }
            catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;