import mongoose from "mongoose";

// Defining Schema
const fishHelpSchema = new mongoose.Schema({
    Firstname : {type : String, required: true},
    Lastname : {type : String, required: true},
    Email : {type : String, required: true},
    Call : {type : Number, required: true},
    Message : {type : String, required: true}
});

// Modeling Schema
const fishHelpModel = mongoose.model('fish_customer_issue', fishHelpSchema);

export default fishHelpModel;