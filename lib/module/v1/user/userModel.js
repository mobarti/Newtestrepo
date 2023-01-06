// Importing mongoose
var mongoose = require("mongoose");
var constants = require('../../../constant');

var Schema = mongoose.Schema;
var User;

var UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        index: true,
    },
    userType:{
        type: Number,
        default: 1, //1-user, 2-company,3-admin
    },
    gender: {
        type: Number,
        default: 0, //0 Undefined, 1 Male, 2 Female, 3 Others
        min :0,
        max:3
    },
    profileImage: {
        type: String,
    },
    phone: {
        type: String,
    },
    facebook: {
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
        min:1,
        max:3
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
User = module.exports = mongoose.model(constants.DB_MODEL_REF.USER, UserSchema);


