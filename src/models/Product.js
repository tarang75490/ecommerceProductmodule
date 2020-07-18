

const mongoose = require("mongoose")
const shortid = require('shortid')

// shortid.characters('0123456789a')
 
const productSchema = new mongoose.Schema({
    productId:{
        type: String,
        // default: "PRODUCT_"+shortid.generate(),
        required:true,
        unique:true
    },
    priority:{
        type: Number,
        default:0,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:[{
        type:String,
    }],
    thumbnails:[{
        type:String
    }],
    markForDelete:{
        type:Boolean,
        default:false
    },
    mainCategory:{
        type:String,
        enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
        required:true
    },
    subCategory:{
        type:String,
        required:true
    },
    productRating:{
        type:Number,
        required:true,
        default:1,
        min:1,
        max:5,
    },
    workingDays:{
        type:String,
    },
    features:{
        type:Object,
        required:true
    }


})
// productSchema.virtual('variants',{
//     ref:'Variant',
//     localField:'productId',
//     foreignField:'productId'
// })


module.exports = mongoose.model("Product",productSchema)