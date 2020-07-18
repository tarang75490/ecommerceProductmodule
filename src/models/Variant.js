const mongoose = require("mongoose")
const shortid = require('shortid')


const variantSchema = new mongoose.Schema({
    variantId:{
        type: String,
        default: "VARIANT_"+shortid.generate(),
        unique:true
    },
    productId:{
        type: mongoose.Schema.Types.String, 
        ref: 'Product',
        required:true
    },
    color:{
        type:String
    },
    price:{
        type:Number,
        default:0,
        required:true
    },
    size:{
        type:String,
    },
   

},{
    strict: true,
    strictQuery: true
})

variantSchema.index({
    variantId: 1, 
    productId: 1
   },
   { 
    unique: true 
   });


module.exports = mongoose.model("Variant",variantSchema)