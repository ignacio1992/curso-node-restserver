require('dotenv').config();
const Serve = require('./models/server');


const server = new Serve();


server.listen();