const service = require('../services/services')
const inventoryService = require('../services/inventoryServices')

const HttpError = require('../models/errors/httpError')


// Create a new folder in Documer Service
exports.createProduct= async (req, res) => {
    try {
        let response = await service.createProduct(req.fastify, req.body)
        if(response.response){
            res.code(400)
                throw new HttpError('faliure', 22005,response.response)
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2001, "Create Product Failed", e.message)
    }
}

exports.getProducts = async (req, res) => {
    try {
        console.log(res.body)
        let response =  await service.getProducts(req.fastify, req.body) 
        if(response.error){
            res.code(400)
                throw new HttpError('faliure', 22005,response.error)
        }

        return res.status(200).send({
            status: 'success',
            data:   response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Get product Failed", e.message)
    }
}
exports.increasePriorityofProduct = async (req, res) => {
    try {
        console.log(res.body)
        let response =  await service.increasePriority(req.fastify, req.body) 
        return res.status(200).send({
            status: 'success',
            data: "Priority Increased"
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Get product Failed", e.message)
    }
}
exports.createCategory = async (req, res) => {
    try {
        let response = await service.createCategory(req.fastify, req.body)

        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2002, "Create Category Failed", e.message)
    }
}

exports.getSubCategories = async (req,res) => {
    try {
        console.log(req)
        let response = await service.getSubCategories(req.fastify)

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2002, "Geting Subcategories Failed", e.message)
    }
}
exports.getFeatures = async (req,res) =>{
    try {
        let response = await service.getFeatures(req.fastify, req.query)
        if(response.response === "Not Found"){
            res.code(400)
                throw new HttpError('faliure', 22005,"Sub Category not found")
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2002, "Geting Features Failed", e.message)
    }
}

exports.createVariant = async (req, res) => {
    try {
        
        let response = await service.createVariant(req.fastify, req)
        console.log(response)
        if(response.response === "Not Found"){
            res.code(400)
            console.log("fsdfdf")
                throw new HttpError('faliure', 22005, "Product not found")
        }
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2003, "Create Variant Failed", e.message)
    }
}
exports.getVariants = async (req,res) =>{
    try {
        let response = await service.getVariant(req.fastify, req.query)

        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2002, "Geting Varaints Failed", e.message)
    }
}


exports.inputBrowse = async (req, res) => {
    try {
        let response = await service.inputBrowse(req.fastify)
        
        return res.status(201).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Input Browse Failed", e.message)
    }
}


exports.filterBrowse = async (req, res) => {
    try {
        let response = await service.filterBrowse(req.fastify,req.body)
        console.log(response)
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Filter Browse Failed", e.message)
    }
}

exports.uploadFile = async (req, res) => {
    try {
        console.log(req.file)
        if (!req.isMultipart()) {
            res.code(400).send(new Error('Request is not multipart'))
            return
          }
          let uploadRes ;
          const mp = req.multipart(handler, onEnd)
          
          async function handler (field, file, filename, encoding, mimetype) {
            const fileInfo ={
                file:file,
                mimetype:mimetype
            }
            let productInfo = await service.getProducts(req.fastify,req.query)

            if (productInfo.length === 0) {
                res.code(400)
                throw new HttpError('faliure', 22005, "Product not found")
            }
            console.log(productInfo)
            service.uploadFile(req.fastify,fileInfo, productInfo[0], (uploadResponse, uploadError) => {
                    if (uploadError) {
                        res.code(500)
                        throw new HttpError('faliure', 22005, "Upload of File is failed",uploadError)
                    } else {
                        req.fastify.log.debug(uploadResponse)

                        uploadRes = uploadResponse
                    }
                })
          }
         
          function onEnd(err) {
            console.log('upload completed')
            return res.status(200).send({
                            status: 'success',
                            data: uploadRes
                        })
                    
          }
        
    } catch (e) {
        throw new HttpError('faliure', 22100,"Upload of File is failed", e.message)
    }
}


exports.getInventory = async (req, res) => {
    try {
        let response = await inventoryService.getInventory(req.fastify,req.body)
        console.log(response)
        if(response.error){
            throw new HttpError('faliure', 22005, response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Get Inventory Failed", e.message)
    }
}

exports.reduceInventory = async (req, res) => {
    try {
        let response = await inventoryService.reduceInventory(req.fastify,req.body)
        if(response.error){
            throw new HttpError('faliure', 22005, response.error)
        }
        
        return res.status(200).send({
                status: 'success',
                data: response.response
            })
        
        
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Inventory Reduction Failed", e.message)
    }
}

exports.maintainInventory = async (req, res) => {
    try {
        let response = await inventoryService.maintainInventory(req.fastify,req.body)
        console.log(response)
        if(response.error){
            throw new HttpError('faliure', 22005, response.error)
        }
        return res.status(200).send({
            status: 'success',
            data: response
        })
    } catch (e) {
        res.code(500)
        throw new HttpError('faliure', 2004, "Maintain Inventory Failed", e.message)
    }
}