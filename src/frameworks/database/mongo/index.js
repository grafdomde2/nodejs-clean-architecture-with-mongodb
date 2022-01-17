const mongoose = require('mongoose');
const schemas = require('./schemas')
module.exports = {
    connect: () => {
        const db_conn_str = process.env.DB_CONNECTION_STRING;
        mongoose.connect(db_conn_str, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'Connection to mongoDB has faild.'));
        db.once('open', () => {
            console.log('Succesfully connected to mongoDB');
        })
    },
    schemas
}