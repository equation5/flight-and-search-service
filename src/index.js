// Importing the required modules
const express = require('express');
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverconfig');  
const setupandstartserver=async ()=>
{
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
    
});
}
setupandstartserver();