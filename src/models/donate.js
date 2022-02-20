const mongoose = require("mongoose");


const donateSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    contact_no: {
        type: Number,
        required: true,

    },
    email_id: {
        type: String,
        required: true
    },

    Address: {
        type: String,
        required: true
    },

    pincode: {
        type: Number,
        required: true
    },


    textarea: {
        type: String,
        required: true
    }
});

const Donate = new mongoose.model('Item', donateSchema);

module.exports = Donate;