const mongoose = require("mongoose");

const RegistrationSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    phone:{
        type:Number
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Registrations', RegistrationSchema);