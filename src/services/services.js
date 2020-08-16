const Product = require("../models/Product")
const Category = require("../models/Category")
const Variant = require("../models/Variant")
const Summary = require("../models/Browsing")
const Collection = require("../models/Collection")
const Inventory = require("../models/Inventory")

const AwsStorageProvider = require("./StorageProvider/storageProvider")

const uuid = require('uuid')
const config = require('../config/index')
const keys  = config.awsS3
const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId:keys.accessKey,
    secretAccessKey:keys.secretKey,
    region:"ap-south-1"
})



const createProduct = async (fastify,createProductRequest) =>{
    let collection = await Collection.findOne({})
    if(!collection){
        collection = await new Collection(collection).save()
    }
    collection.noOfProducts += 1
    const checksubcategories  = await  getSubCategories(fastify)
    console.log(!checksubcategories[createProductRequest.mainCategory].includes(createProductRequest.subCategory))
    if (!checksubcategories[createProductRequest.mainCategory].includes(createProductRequest.subCategory)){
        return {response:"Subcategory not found"}
    }else{
        const features = await getFeatures(fastify,{
                                                    mainCategory : createProductRequest.mainCategory,
                                                    subCategory :createProductRequest.subCategory, 
                                                })
        const feature ={}
        features.forEach((fea)=>{
            feature[fea.featureName] = fea.featureValues
        })
        console.log(feature)
        for(let fea in createProductRequest.features){
            if(feature[fea]){
                if(!feature[fea].includes(createProductRequest.features[fea])){
                    console.log(createProductRequest.features[fea])
                    return {response:"Feature Value not Allowed"}
                }
            }else{
                console.log(fea)
                return {response:"Feature not Defined "}
            }
        }
    }
    const product = new Product({
        productId:"Product_"+collection.noOfProducts,
        ...createProductRequest
    })
    
    await new Collection(collection).save()
    return product.save()
}

const increasePriority = async (fastify,increaseProrityRequest) => {
    let product = await Product.findOne({productId:increaseProrityRequest.productId})
    product.priority += increaseProrityRequest.priority
    await product.save()

}
const getProducts = async (fastify,findProductRequest) =>{
    // console.log(findProductRequest)
    let products =  await Product.find({
                            ...findProductRequest,
                            markForDelete:false})  
    
    const checksubcategories  = await  getSubCategories(fastify)
    if(findProductRequest.mainCategory && findProductRequest.subCategory){
    console.log(!checksubcategories[findProductRequest.mainCategory].includes(findProductRequest.subCategory))
    if (!checksubcategories[findProductRequest.mainCategory].includes(findProductRequest.subCategory)){
        return {
            error:"Sub Category Not FOund"
        }
    }  
    }

    return products
}

const createCategory = async (fastify,createCategoryRequest)=>{
    const category =    new Category(createCategoryRequest)
    console.log(category)

    return category.save()
}

const getSubCategories = async(fastify) => {
    let categories = await Category.find({})
    
    subcategories = {}
    categories.forEach((category)=>{
        if(subcategories[category.mainCategory]){
            subcategories[category.mainCategory] = [
                ...subcategories[category.mainCategory],
                category.subCategory
            ]
        }else  {
            subcategories[category.mainCategory] = [category.subCategory]
        }
    })

    return subcategories
}


const getFeatures = async (fastify,getFeaturesRequest) => {
    
    let feature = await Category.findOne({...getFeaturesRequest})
    const checksubcategories  = await  getSubCategories(fastify)
    if (!checksubcategories[getFeaturesRequest.mainCategory].includes(getFeaturesRequest.subCategory)){
        return {
            response:"Not Found"
        }
    }
    return  feature["features"]
}




const createVariant = async (fastify,createVariantRequest)=>{
    const product = await getProducts(fastify,{productId:createVariantRequest.body.productId})
    console.log(createVariantRequest)
    if (product.length === 0 ){
        return {
            response:"Not Found"
        }
    }
    const collection = await Collection.findOne({})
    collection.noOfVariants += 1
    const variant = new Variant({
        variantId:"Variant_"+collection.noOfVariants,
        ...createVariantRequest.body
    })
    const inventory = new Inventory({
        variantId:"Variant_"+collection.noOfVariants,
        inventory:createVariantRequest.query.inventory,
        reservedInventory:createVariantRequest.query.inventory,
    })
    
    await new Collection(collection).save()
    await inventory.save()
    
    return await variant.save()
}

const getVariant = async (fastify,getVariantRequest) => {
    
    const variants = await Variant.find({...getVariantRequest})
    console.log(variants)
    const product = await getProducts(fastify,{...getVariantRequest})
    console.log(product)
    const productInfo = {
        ...product[0]._doc,
        variants:variants
    }
    console.log(productInfo)
    return productInfo
}


const inputBrowse = async (fastify) => {
    const variants = await Variant.find({})
    const productss = await getProducts(fastify,{})
    const products = {}
    productss.forEach((product)=>{
        products[product.productId] = product
    })
    variants.forEach(async (variant) => {
            const product = products[variant.productId]
            const inventory = await Inventory.findOne({variantId:variant.variantId})
            const summary = new Summary({
                variantId : variant.variantId,
                productId: variant.productId,
                mainCategory: product.mainCategory,
                subCategory: product.subCategory,
                quantity:inventory.reservedInventory,
                price: variant.price,
                productFeatures:{
                        ...product.features,
                        thumbnails:product.thumbnails,
                        productRating: product.productRating,
                        productName:product.productName,
                        BRAND:product.brand}
            })
            console.log(summary)
            await summary.save()
    })
    
    const summary =  await Summary.find({})
    return summary
}

const filterBrowse = async (fastify,filterRequest)=>{
    let filter = {}
    
    for(var fea in filterRequest){
        if(fea === "productFeatures"){
            for(var feature in filterRequest.productFeatures){
                filter['productFeatures.'+feature] = filterRequest.productFeatures[feature]  
            }
        }else{
            filter[fea] = filterRequest[fea]
        }
    }
    console.log(filter)
    var variants = await Summary.find(filter)
    // console.log(variants)
    const productsWithSameProductId = {}
    const products=[]
    variants.forEach((variant)=>{
        if(productsWithSameProductId[variant.productId]){
            productsWithSameProductId[variant.productId] = [...productsWithSameProductId[variant.productId], variant]
        }else{
            productsWithSameProductId[variant.productId] = [variant]
        }
    })
    // console.log(productsWithSameProductId)
    for(var productId in productsWithSameProductId){
        products.push(productsWithSameProductId[productId][0])
    }
    console.log(products)
    return products

} 

const uploadFile = async (fastify,uploadRequest,folderInfo,callback) =>{
    const storageProvider = new AwsStorageProvider(fastify,uploadRequest,folderInfo,callback)
    return storageProvider.uploadFile()
}


module.exports = {
    getProducts , 
    createVariant,
    getVariant,
    inputBrowse,
    createProduct,
    createCategory,
    getSubCategories,
    getFeatures,
    uploadFile,
    filterBrowse,
    increasePriority
}