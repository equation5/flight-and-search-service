const {CityRepository}=require('../repository/index.js')
class CityService

{
    constructor()
    {
        this.cityrepo=new CityRepository();
    }
    async createcity(data)
    {
        try{
            const response=await this.cityrepo.createcity(data);
            return city;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
      throw(error);      
        }
    }
    async deletecity(data)
    {
        try{
            const response=await this.cityrepo.deletecity(data);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
            throw(error);
        }
    }
    async updatecity(cityId,data)
    {
        try{
            const response=await this.cityrepo.deletecity(cityId);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
throw(error);
        } 
    }
    async getcity(cityId)
    {
        try{
            const response=await this.cityrepo.getcity(cityId);
            return response;
        }
        catch(error)
        {
            console.log("something wrong in service layer");
            throw(error);
        }
    }
}