const mongoose = require('mongoose');
const Schema = mangoose.Schema;
let AdData = new Schema({
    emp_name: {
        type: String
    },
    emp_age:{
        type: Number
    }
},
    {
    collection: 'addata'
});
module.expoprts = mangoose.model(AdData, AdData);