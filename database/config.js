const mongoose = require('mongoose');


const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online.')
    } catch (e) {
        console.log(e);
        throw new Error('Error en la base de datos, hable con el admin.');
    }

}

module.exports = {
    dbConnection
}