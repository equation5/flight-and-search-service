const {CityRepository}=require('../repository/index.js')
class CityService

{    constructor()
    {
        this.cityrepo=new CityRepository();
    }
    async createCity(data) {
        try {
            if (!data.name) throw new Error("City name is required"); // Check for name
            const response = await this.cityrepo.createCity({ name: data.name }); // Pass { name } explicitly
            return response;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async deleteCity(data)
    {
        try{
            const response=await this.cityrepo.deleteCity(data);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
            throw(error);
        }
    }
    async updateCity(cityId,data)
    {
        try{
            const response=await this.cityrepo.updateCity(cityId,data);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
throw(error);
        } 
    }
    async getCity(cityId)
    {
        try{
            const response=await this.cityrepo.getCity(cityId);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
            throw(error);
        }
    }
async getAllCities()
{
try{
    const cities=await this.cityrepo.getAllCities();
    return cities;
}
catch(error)
{
    console.log("something wrong in service layer");
    throw(error);
}
}
}
module.exports = CityService;