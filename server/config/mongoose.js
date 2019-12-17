console.log("server/config/mongoose.js is running");

const mongoose = require('mongoose');

module.exports = function(db_name) {
    mongoose.connect(`mongodb://localhost/${db_name}`);
    require('../models/pet');
}