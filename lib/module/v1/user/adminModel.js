// Importing mongoose
const mongoose = require("mongoose");
const constants = require('../../../constant');

let Schema = mongoose.Schema;
let User;

const adminSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        index: true,
    },
    phone: {
        type: String,
    },
    deviceToken: {
        type: String
    },
    deviceID: {
        type: String,
    },
    deviceTypeId: {
        type: Number,
        default: 1, //1 iOS , 2 android , 3 web
        min: 1,
        max: 3
    },
    isDelete: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
    }
},
);

//Export user module
User = module.exports = mongoose.model(constants.DB_MODEL_REF.ADMIN, adminSchema);


