const config = require('../../config/index')
const awsS3Config = config.awsS3

const Product = require("../../models/Product")
var AWS = require('aws-sdk');
const s3Client = new AWS.S3({ apiVersion: awsS3Config.apiVersion });

class AwsS3Provider {
    constructor(fastify,fileInfo, ProductInfo, callback) {
        this.fastify = fastify
        this.fileInfo = fileInfo
        this.ProductInfo = ProductInfo
        this.callback = callback
    }

    getFileContent(contentCallback) { 
        let fileContent = this.uploadRequest.fileContent
  
        if (!fileContent) { 
            this.fastify.axios.get(this.uploadRequest.fileUrl,
                { responseType: 'arraybuffer', encoding: "binary" }).then(content => {
                      contentCallback({
                        "content": Buffer.from(content.data, "binary"),
                        "contentEncoding": "binary"
                    })
                }).catch(error => {
                    contentCallback(null, error)  
                })
        } else {
            const base64Data = new Buffer.from(fileContent.replace(/^data:.\/\w+;base64,/, ""), 'base64');
            contentCallback({
                "content": base64Data,
                "contentEncoding": "base64" 
            })
        }
    }

    getFilePath(folderPath) {
        var path = folderPath

        if(!path) {
            path = '/'
        } else if (!path.endsWith('/')) {
            path = path + '/'
        }

        return path
    }


    uploadFile() {
        var fastify = this.fastify
        var callback = this.callback
        var fileInfo = this.fileInfo
        var productInfo = this.ProductInfo


        console.log(productInfo)
        var path = this.getFilePath(productInfo.mainCategory)
        var count = productInfo.thumbnails.length + 1
        var filePath = path + productInfo.productId +"@"+count
        
                const params = {
                    Bucket: awsS3Config.BucketName,
                    Key: filePath,
                    Body: fileInfo.file,
                    ContentType: fileInfo.mimetype,
                    // ContentEncoding: contentObject.contentEncoding,
                }

                s3Client.upload(params, async function (error, data) {
                    if (error) {
                          fastify.log.info(error)

                        callback(null, error)
                    } else {
                        fastify.log.info(data)
                        
                        try{
                            
                        productInfo.thumbnails = [...productInfo.thumbnails,filePath]
                        console.log(productInfo)
                        await productInfo.save()

                        callback({url : data.Location})
                        }catch(e){
                            callback(null,"Unable to load image in Product")
                        }
                        
                        

                    }
                })
    }
}

module.exports = AwsS3Provider