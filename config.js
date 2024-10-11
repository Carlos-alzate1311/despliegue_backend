const mongoose = require('mongoose');
require ('dotenv').config()
const dbconnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO_URL)
    .then((success) => console.log("Conexión exitosa"))
    .catch((err) => console.log(err.message));
}

module.exports = dbconnect;