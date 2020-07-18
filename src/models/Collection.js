const mongoose = require("mongoose")

require('../app.js')

const collectionSchema = new mongoose.Schema({
    noOfProducts:{
        type:Number,
        default:0
    },
    noOfVariants:{
        type:Number,
        default:0
    },
})
module.exports = mongoose.model("Collection",collectionSchema)

