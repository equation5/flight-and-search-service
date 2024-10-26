const {services, CityService}=require('../services/index');
const inst=new CityService;

const create=async (req,res)=>{
    try{
        const city=await inst.createcity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created city",
            err:{}
        });
         }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create city",
            err:{}
        });
    }
}

const deleteCity=async (req,res)=>{
    try{
        const response=await inst.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully destroy city",
            err:{}
        });
         }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete city",
            err:{}
        });
    }
}
const get=async (req,res)=>{
    try{
        const response=await inst.createcity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully get city",
            err:{}
        });
         }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to get city",
            err:{}
        });
    }
}
const update=async (req,res)=>{
    try{
        const response=await inst.createcity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:"successfully update city",
            err:{}
        });
         }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to update city",
            err:{}
        });
    }
}