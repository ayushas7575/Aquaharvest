import mongoose from "mongoose";

// Defining Schema
const fisherManSchema  = new mongoose.Schema({
    name : {type: String, required: true},
    call : {type: Number, required: true},
    userName : {type: String, required: true},
    email : {type : String, required: true},
    password : {type : String, required: true},
    date : {type: String, default: new Date(Date.now()).toString()},
    fishes : [{name : {type : String}, other : {type : String}, price : {type : String}}]
});

// Modeling Schema
const fisherManModel = mongoose.model('Fisherman', fisherManSchema);

export default fisherManModel;