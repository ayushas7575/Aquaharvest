import mongoose from "mongoose";

// Defining Schema
const dealerSchema = new mongoose.Schema({
    name : {type: String, required: true},
    call : {type: Number, required: true},
    userName : {type: String, required: true},
    email : {type : String, required: true},
    password : {type : String, required: true},
    date : {type: String, default: new Date(Date.now()).toString()}
})

// Modeling Schema
const dealerModel = mongoose.model('Dealer', dealerSchema);

export default dealerModel;