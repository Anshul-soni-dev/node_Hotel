const mongoose=require('mongoose');
const personSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['chef','waiter','manager'],
        required: true

    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    }

});
const person = mongoose.model('person',personSchema);
module.exports = person;