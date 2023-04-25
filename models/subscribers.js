const mongoose  = require("mongoose")

const  subscribersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToPage: {
        type: String,
        required: true
    },
    dateJoined: {
    type: Date,
    required: true,
    default: Date.now
    }

})

module.exports = mongoose.model('subscriber', subscriberSchema)