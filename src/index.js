// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverconfig');  
const CityRepository=require('./repository/city-repository');

const setupandstartserver=async ()=>
{ dfs
// Initializing the app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());
// Defining a simple route
// Listening on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    const repo=new CityRepository();
    repo.createCity({name:"new delhi"});
});
}
setupandstartserver();