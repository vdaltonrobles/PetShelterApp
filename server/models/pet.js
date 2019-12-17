console.log("server/models/pet.js is running");

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "The pet must have a name!"],
        minlength: [3, "The pet name must be at least three characteres long"],
        unique: [true, "Pet name is already taken.  Please use another name."]

    },

    type: {
        type: String,
        required: [true, "The pet type is required!"],
        minlength: [3, "Pet Type must be at least three characters long"]
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must be at least three characters long"]
    },

    skill1: {
        type: String
    },

    skill2: {
        type: String
    },
    
    skill3: {
        type: String
    },

    likes: {
        type: Number,
        default: 0
    }

}, {timestamps: true}).plugin(uniqueValidator, { message: 'Name is already taken' });

mongoose.model("Pet", PetSchema);