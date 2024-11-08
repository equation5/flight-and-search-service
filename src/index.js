// // Importing the required modules
// const express = require('express');
// const bodyParser = require('body-parser');
// const {PORT}=require('./config/serverconfig');  
// const CityRepository=require('./repository/city-repository');
// const ApiRoutes=require('./routes/index');
// const setupandstartserver=async ()=>
// { const app = express();

//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api',ApiRoutes);

// // Parse application/json

// // Defining a simple route
// // Listening on port 3000
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     // const repo=new CityRepository();
//     // repo.createCity("new delhi");

// });
// }
// console.log("running");
// setupandstartserver();
require('dotenv').config();


const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {Airplane} = require('./models/index');

const setupAndStartServer = async () => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', ApiRoutes);

    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
    });
}
console.log("PORT from environment:", process.env.PORT);

setupAndStartServer();