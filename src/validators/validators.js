const HttpError = require('../models/errors/httpError')

exports.validateCreateProductRequest = function (req, res, done) {
    console.log(Object.keys(req.body.features).length)
    if (!req.body.productName) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productName is missing'))
    }else if (!req.body.brand) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'company is missing'))
    }else if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    } else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }  
    else if ( Object.keys(req.body.features).length === 0) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'features is missing'))
    }else if (!(["MEN","ELECTRONICS","APPLIANCES","WOMEN"]).includes(req.body.mainCategory)){
        res.code(400)
        done(new HttpError('faliure',20001,"check main category"))
    }
    else {
        done()
    }
}


exports.validateGetProductRequest = function (req, res, done) {
    console.log(Object.keys(req.body))
    console.log(Object.keys(["productId","productName","brand","mainCategory","subCategory","priority"]).includes(Object.keys(req.body)))
    if (Object.keys(req.body).length !== 0) {
     if (  Object.keys(["productId","productName","brand","mainCategory","subCategory","priority"]).includes(Object.keys(req.body))){
         if ( req.body.mainCategory && (["MEN","ELECTRONICS","APPLIANCES","WOMEN"]).includes(req.body.mainCategory)){
            res.code(400)
            done(new HttpError('faliure',20001,"check main category"))
        }
        res.code(400)
        done(new HttpError('faliure', 20001, 'body should contain any of productId, productName,comapnyName,mainCategory ,subCategory'))
    }
    // else if(!req.query.page){
    //     res.code(400)
    //     done(new HttpError('faliure',20001,"page No missing"))
    // }else if(!req.query.size){
    //     res.code(400)
    //     done(new HttpError('faliure',20001,"size is missing"))
    // }
    else{
        done()
    }
}
    else {
        done()
    }
}

exports.validateCreateVariantRequest = function (req, res, done) {
    if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'productId is missing'))
    }else if (!req.body.price) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'price is missing'))
    }else if (!req.query.inventory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Inventory is missing'))
    }
    else {
        done()
    }
}



exports.validateCreateCategoryRequest = function (req, res, done) {
    console.log("fsf")
    if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'mainCategory is missing'))
    }else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'subCategory is missing'))
    }else if (req.body.features.length === 0 ) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'features is missing'))
    }else if (!(["MEN","ELECTRONICS","APPLIANCES","WOMEN"]).includes(req.body.mainCategory)){
        res.code(400)
        done(new HttpError('faliure',20001,"check main category"))
    }
    else {
        done()
    }
}

exports.validateUploadFileRequest = function (req, res, done) {
    if(!req.query.productId){
        res.code(400)
        done(new HttpError("failiure",20002,"productId missing"))
    }
    else {
        done()
    }
}

exports.validateInputBrowseRequest = function (req, res, done) {
    // if (!req.query.variantId) {
    //     res.code(400)
    //     done(new HttpError('faliure', 20001, 'variantId is missing'))
    // }
     console.log(req.query)
    // else {
        done()
    // }
}


exports.validateGetFeaturesRequest = function (req, res, done) {
    console.log(req.query)
    if (!req.query.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Main Category is missing'))
    }else if (!req.query.subCategory){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Sub Category is missing'))
    }else if (!(["MEN","ELECTRONICS","APPLIANCES","WOMEN"]).includes(req.query.mainCategory)){
        res.code(400)
        done(new HttpError('faliure',20001,"check main category"))
    }
     
    else {
        done()
    }
}
exports.validateGetVariantsRequest = function (req, res, done) {
    if (!req.query.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Product ID  is missing'))
    }
    else {
        done()
    }
}



exports.validateFilterBrowseRequest   = function (req,res,done){
    if (!req.body.mainCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Main Category  is missing'))
    }else if (!req.body.subCategory) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Sub Category  is missing'))
    }else if ((!["MEN","ELECTRONICS","APPLIANCES","WOMEN"]).includes(req.body.mainCategory)){
        res.code(400)
        done(new HttpError('faliure',20001,"check main category"))
    }
    else {
        done()
    }
}



exports.validateincreasePriorityRequest = function (req,res,done) {
    if (!req.body.productId) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Product Id  is missing'))
    }else if (!req.body.priority) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Priority  is missing'))
    }
    else {
        done()
    }
}




exports.validateGetInventoryRequest   = function (req,res,done){
    if (req.body.variantIds.length === 0) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Variant Ids  is missing'))
    }
    else {
        done()
    }
}


exports.validateReduceInventoryRequest = function (req,res,done){
    if (!req.body.variantIds) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Variant Id  is missing'))
    }else if (!req.body.quantities) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Quantity  is missing'))
    }
    else {
        done()
    }
} 
exports.validateMaintainInventoryRequest = function (req,res,done){
    if (!req.body.variantIds) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Variant Id  is missing'))
    }else if (!req.body.quantities) {
        res.code(400)
        done(new HttpError('faliure', 20001, 'Quantity  is missing'))
    }else if(!req.body.message){
        res.code(400)
        done(new HttpError('faliure', 20001, 'Message  is missing'))
    }
    else {
        done()
    }
} 