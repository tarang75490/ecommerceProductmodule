const mongoose = require("mongoose")

require('../app.js')

const inventorySchema = new mongoose.Schema({
    variantId:{
        type:String,
        unique:true,
        required:true,
    },
    inventory:{
        type:Number,
        default:0
    },
    reservedInventory:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model("Inventory",inventorySchema)

