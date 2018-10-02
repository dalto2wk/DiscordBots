//Brings in Fortnite module
const Client = require("fortnite");
//API key in json file for key security
const apikey = require("./api.json")
// Create instance of client with API key
const fortnite = new Client(apikey.key);

//display api data
fortnite.user('Will I_AM' , 'pc').then(console.log);

