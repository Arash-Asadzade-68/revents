const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    description:{
        type:String,
       default:''
    },
    city: {
        type:String,
        required:true
    },
    venue: {
        type:String,
        required:true
    },
    hostedBy: {
        type:String,
        required:true
    },
    hostPhotoURL: {
        type:String,
        required:true
    },
    attendees_id: {
        type:Number,
        default:0
    }
    

},{timeStamps:true})


const Event = mongoose.model('Event',eventSchema);

module.exports = {Event}