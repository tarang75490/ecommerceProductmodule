const mongoose = require("mongoose")

require('../app.js')

const categorySchema = new mongoose.Schema({
    mainCategory:{
        type:String,
        enum:["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
        required:true,
    },
    subCategory:{
        type:String,
        required:true,
    },
    features:[{
        featureName:{
            type:String,
            required:true,
        },
        featureValues:[{
            type:String,
        }]
    }]
   

},{
    strict: true,
    // strictQuery: true
})

categorySchema.index({
     mainCategory: 1, 
     subCategory: 1
    },
    { 
     unique: true 
    });


const Category = mongoose.model("Category",categorySchema)
// const category = new Category({
//     categoryName:"ELECTRONICS",
//     subCategory:"LAPTOP",
//     features:[{
//         featureName:"RAM",
//         featureType:"number",
//         featureValues:[4,8,12]
//     }]
// })

// category.save()
// console.log(category)


module.exports = Category

