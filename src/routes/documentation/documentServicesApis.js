exports.createProduct = {
    description: 'Create a new product in Product Service',
    tags: ["Products"],
    summary: 'Create a product',
    body: {
        "type": "object",
        "properties": {
            "priority": {
                "type": "number"
            },
            "productName": {
                "type": "string"
            },
            "brand":{
                "type":"string",
            },
            "description":{
                "type":"array",
                "items":{
                    "type":"string",
                    "default":""
                }
            },
            "thumbnails":{
                "type":"array",
                "items":{
                    "type":"string",
                    "default":""
                }
            },
            "workingDays":{
                "type":"number"
            },
            "productRating":{
                "type":"number",
                "default":1,
            },
            "markForDelete":{
                "type":"boolean",
                "default":false,
                
            },
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                },
            "subCategory":{
                "type":"string",
            },
            "features":{
                "type":"object",
            }
        },
        "required": [
            "productName",
            "brand",
            "productRating",
            "mainCategory",
            "subCategory",
            "features"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "productId":{
                            "type": "string",
                        },
                        "priority": {
                            "type": "number"
                        },
                        "productName": {
                            "type": "string"
                        },
                        "brand":{
                            "type":"string",
                        },
                        "description":{
                            "type":"array",
                            "items":{
                                "type":"string",
                                "default":""
                            }
                        },
                        "thumbnails":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        },
                        "productRating":{
                            "type":"number",
                            "default":1,
                        },
                        "markForDelete":{
                            "type":"boolean",
                            "default":false,
                        },
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                        "features":{
                            "type":"object",
                            "additionalProperties":{
                                "type":"string",
                            }
                        }
                    },
                    "required": [
                        "productId",
                        "productName",
                        "brand",
                        "mainCategory",
                        "subCategory",
                        "features",
                        "productRating"
                    ]
                },
            },
                    "required": [
                            "status",
                            "data"
                            ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }
exports.createVariant = {
    description: 'Create a new variant of product in Product Service',
    tags: ["Products"],
    summary: 'Create a Variant',
    body: {
        "type": "object",
        "properties": {
            "productId": {
                "type": "string"
            },
            "color": {
                "type": "string"
            },
            "price":{
                "type":"number",
            },
            "size":{
                "type":"string",
            },
        },
        "required": [
            "productId",
            "price",
        ]
    },
    query:{
        "type": "object",
        "properties": {
            "inventory":{
                "type":"number"
            }  
        },
        "required": [
            "inventory"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "variantId": {
                            "type": "string"
                        },
                        "productId": {
                            "type": "string"
                        },
                        "color": {
                            "type": "string"
                        },
                        "price":{
                            "type":"number",
                        },
                        "size":{
                            "type":"string",
                        },
                        
                    },
                    "required": [
                        "variantId",
                        "productId",
                        "price",
                    ]
                },
            },
                "required": [
                        "status",
                        "data"
                        ]
        }, 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}

exports.createCategory = {
    description: 'Create a new category in Product Service',
    tags: ["Products"],
    summary: 'Create a category',
    body: {
        "type": "object",
        "properties": {
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                },
            "subCategory":{
                "type":"string",
            },
            "features":{
                "type":"array",
                "items":{
                    "type":"object",
                    "properties":{
                        "featureName":{
                            "type":"string"
                        },
                        "featureValues":{
                            "type":"array",
                            "items":{
                                "type":"string",
                            },
                        }
                    },
                    "required":[
                        "featureName",
                        "featureValues"
                    ]

                },
                
            }
            
        },
        "required": [
            "mainCategory",
            "subCategory",
            "features"
        ]
    },
    response: {
        201: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "object",
                    "properties": {
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                        "features":{
                            "type":"array",
                            "items":{
                                "type":"object",
                                "properties":{
                                "featureName":{
                                    "type":"string"
                                },
                                "featureValues":{
                                    "type":"array",
                                    "items":{
                                        "type":"string"
                                    }
                                }
                            },
                            "required":[
                                "featureName",
                                "featureValues"
                            ]
                        }
                        
                        }
                    },
                    "required": [
                        "mainCategory",
                        "subCategory",
                        "features"
                    ]
                }
        },
        "required": [
                "status",
                "data"
                ]
            }     
        , 400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    }

    exports.inputBrowse = {
        description: 'Create a Summary in Product Service',
        tags: ["Products"],
        summary: "Add a new Variant in Summary ",
        query:{
            "type":"object",
            "properties":{
                "requestId":{
                    "type":"string"
                },
            },
         
        },
        response: {
            201: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['faliure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items":{
                            "type":"object",
                        "properties": {
                            "productId":{
                                "type": "string",
                            },
                            "variantId": {
                                "type": "string"
                            },
                            "price":{
                                "type": "number",
                            },
                            "mainCategory":{
                                "type":"string",
                                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                },
                            "subCategory":{
                                "type":"string",
                            },
                            "productFeatures":{
                                "type":"object",
                                "properties":{
                                "thumbnails":{
                                    "type":"array"
                                },
                                "productRating":{
                                    "type":"number"
                                },
                                "BRAND":{
                                    "type":"string"
                                },
                                "additionalProperties":{
                                    "type":"string",
                                }
                            },
                            "required":[
                                    "thumbnails",
                                    "productRating",
                                    "BRAND"],
                            }
                        },
                        "required": [
                            "productId",
                            "variantId",
                            "mainCategory",
                            "subCategory",
                            "productFeatures"
                        ]
                    },
                },
            },
                        "required": [
                                "status",
                                "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
        }
    exports.uploadFile = {
            description: 'Upload Image in  Product Service',
            tags: ["Products"],
            summary: "Upload Image Via Either FileConent or File Url with its type ",
            body:{
                "type":"object",
                "properties" : {
                    "mimeType":{
                        "type":"string",
                    },
                    "productId": {
                        "type": "string"
                    },
                    "fileContent":{
                        "type": "string"
                    },
                    "fileUrl":{
                        "type": "string"
                    },
                },
                "required":[
                    "mimeType",
                    "productId"
                ]
            },
            response: {
                200: {
                    description: 'Successful response',
                    "type": "object",
                        "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['faliure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "type": "object",
                            "properties": {
                                "url":{
                                    "type": "string",
                                },
                            },
                            "required": [
                                "url"
                            ]
                        },
                    },
                            "required": [
                                    "status",
                                    "data"
                                    ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }
exports.getProducts = {
    description: 'Get ALL Product Lists',
    tags: ['Products','Ecommerce'],
    summary: 'Get  a product',
    body: {
        "type": "object",
        "properties": {
            "priority": {
                "type": "number"
            },
            "productName": {
                "type": "string"
            },
            "brand":{
                "type":"string",
            },
            "mainCategory":{
                "type":"string",
                "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                },
            "subCategory":{
                "type":"string",
            },
            "productId":{
                "type":"string",
            },

        },
        "required": []
    },

    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type": "array",
                    "items":{
                    "properties": {
                        "productId":{
                            "type": "string",
                        },
                        "priority": {
                            "type": "number"
                        },
                        "productName": {
                            "type": "string"
                        },
                        "brand":{
                            "type":"string",
                        },
                        "description":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        },
                        "thumbnails":{
                            "type":"array",
                            "items":{
                                "type":"string"
                            }
                        },
                        "markForDelete":{
                            "type":"boolean",
                            "default":"false"
                        },
                        "mainCategory":{
                            "type":"string",
                            "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                            },
                        "subCategory":{
                            "type":"string",
                        },
                        "productRating":{
                            "type":"number",
                        },
                        "features":{
                            "type":"object",
                            "additionalProperties":{
                                "type":"string"
                            }
                        },
                        "workingDays":{
                            "type":"string"
                        }
                    },
                    "required": [
                        "productId",
                        "productName",
                        "brand",
                        "mainCategory",
                        "subCategory",
                        
                    ]
                },
            },
        },
            "required": [
                "status",
                "data"
            ]
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
}
exports.getSubCategories = {
    description: 'Get ALL Subcategories Lists',
    tags: ['Products','Ecommerce'],
    summary: 'Get  Subcategories ',
    params:{
        "type":"object",
        "properties":{
            "requestId":{
                "type":"string"
            },
        },
     
    },
    response: {
        200: {
            description: 'Successful response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string",
                    "enum": ['faliure', 'success'],
                },
                "message": {
                    "type": "string"
                },
                "data": {
                    "type":"object",
                    "additionalProperties":{
                        "type":"array"
                    }
                },
            },
            "required": [
                "status",
                "data"
            ]
        }
        },
        400: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code"
            ]
        },
        500: {
            "description": 'Error response',
            "type": "object",
            "properties": {
                "status": {
                    "type": "string"
                },
                "code": {
                    "type": "integer"
                },
                "errorCause": {
                    "type": "string"
                },
                "message": {
                    "type": "string"
                }
            },
            "required": [
                "status",
                "message",
                "code",
                "errorCause"
            ]
        }
    }
    exports.getFeatures = {
        description: 'Get Features by category or Subcategory',
        tags: ["Products","Ecommerce"],
        summary: 'Get Features',
        query:{
            "type":"object",
            "properties":{
                "mainCategory":{
                    "type":"string"
                },
                "subCategory":{
                    "type":"string"
                },
            },
            required:[
                "mainCategory",
                "subCategory"
            ]
        },
        response: {
            200: {
                description: 'Successful response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string",
                        "enum": ['faliure', 'success'],
                    },
                    "message": {
                        "type": "string"
                    },
                    "data": {
                        "type": "array",
                        "items": {
                            "type":"object",
                            "properties":{
                            "featureName":{
                                "type": "string",
                            },
                            "featureValues": {
                                "type": "array",
                                "items":{
                                    "type":"string"
                                }
                            },
                            },
                            "required":[
                                "featureName",
                                "featureValues"
                            ]
                    },
                },
            },
                        "required": [
                                "status",
                                "data"
                                ]
            }, 400: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code"
                ]
            },
            500: {
                "description": 'Error response',
                "type": "object",
                "properties": {
                    "status": {
                        "type": "string"
                    },
                    "code": {
                        "type": "integer"
                    },
                    "errorCause": {
                        "type": "string"
                    },
                    "message": {
                        "type": "string"
                    }
                },
                "required": [
                    "status",
                    "message",
                    "code",
                    "errorCause"
                ]
            }
        }
    }

        exports.getVariants = {
            description: 'Get Features bt category or Subcategory',
            tags: ["Products","Ecommerce"],
            summary: 'Get Features',
            query:{
                "type":"object",
                "properties":{
                    "productId":{
                        "type":"string"
                    }
                },
                required:[
                    "productId"
                ]
            },
            response: {
                200: {
                    description: 'Successful response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "enum": ['faliure', 'success'],
                        },
                        "message": {
                            "type": "string"
                        },
                        "data": {
                            "properties":{
                                "priority": {
                                    "type": "number"
                                },
                                "productName": {
                                    "type": "string"
                                },
                                "brand":{
                                    "type":"string",
                                },
                                "description":{
                                    "type":"array",
                                },
                                "thumbnails":{
                                    "type":"array",
                                    "items":{
                                        "type":"string",
                                    }
                                },
                                "workingDays":{
                                    "type":"string"
                                },
                                "productRating":{
                                    "type":"number",
                                    "default":1,
                                },
                                "markForDelete":{
                                    "type":"boolean",
                                    "default":false,
                                    
                                },
                                "mainCategory":{
                                    "type":"string",
                                    "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                    },
                                "subCategory":{
                                    "type":"string",
                                },
                                "features":{
                                    "type":"object",
                                        "additionalProperties":{
                                            "type":"string"
                                        }
                  
                                },
                            "variants":{
                            "type": "array",
                            "items":{
                                "type": "object",
                                "properties": {
                                    "variantId": {
                                        "type": "string"
                                    },
                                    "productId": {
                                        "type": "string"
                                    },
                                    "color": {
                                        "type": "string"
                                    },
                                    "price":{
                                        "type":"number",
                                    },
                                    "size":{
                                        "type":"string",
                                    },
                                    
                                },
                                "required": [
                                    "variantId",
                                    "productId",
                                    "price"
                                ]

                            }
                        }
                    },
                    "required":[
                        "variants"
                    ],
                        },
                     },
                    "required": [
                        "status",
                        "data"
                        ]
                }, 400: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code"
                    ]
                },
                500: {
                    "description": 'Error response',
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string"
                        },
                        "code": {
                            "type": "integer"
                        },
                        "errorCause": {
                            "type": "string"
                        },
                        "message": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "status",
                        "message",
                        "code",
                        "errorCause"
                    ]
                }
            }
            }

            exports.filterBrowse = {
                description: 'Filter Products and its variants   from summary Table',
                tags: ["Ecommerce"],
                summary: 'Filter',
                body: {
                    "type": "object",
                    "properties": {
                        "mainCategory": {
                            "type": "string"
                        },
                        "subCategory": {
                            "type": "string"
                        },
                        "price":{
                            "type":"number",
                        },
                        
                    },
                    "required": [
                        "mainCategory",
                        "subCategory"
                    ]
                },
                response: {
                    200: {
                        description: 'Successful response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "enum": ['faliure', 'success'],
                            },
                            "message": {
                                "type": "string"
                            },
                            "data": {
                                "type": "array",
                                "items":{
                                    "type":"object",
                                "properties": {
                                    "productId":{
                                        "type": "string",
                                    },
                                    "variantId": {
                                        "type": "string"
                                    },
                                    "price": {
                                        "type": "number"
                                    },
                                    "quantity":{
                                        "type": "number"
                                    },
                                   
                                    "mainCategory":{
                                        "type":"string",
                                        "enum":["MEN","WOMEN","ELECTRONICS","APPLIANCES"],
                                        },
                                    "subCategory":{
                                        "type":"string",
                                    },
                                    "productFeatures":{
                                        "type":"object",
                                        "properties":{
                                        "productName":{
                                            "type":"string"
                                        },
                                        "productRating":{
                                            "type":"number"
                                        },
                                        "BRAND":{
                                            "type":"string",
                                        },
                                        "thumbnails":{
                                            "type":"array",
                                            "items":{
                                                "type":"string"
                                            }
                                        },
                                    },
                                    "required":[
                                        "BRAND",
                                        "thumbnails",
                                        "productRating",
                                        "productName"
                                    ]
                                    }
                                },
                                "required": [
                                    "productId",
                                    "variantId",
                                    "price",
                                    "mainCategory",
                                    "subCategory",
                                    "productFeatures"
                                ]
                            },
                            },
                        },
                                "required": [
                                        "status",
                                        "data"
                                        ]
                    }, 400: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code"
                        ]
                    },
                    500: {
                        "description": 'Error response',
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string"
                            },
                            "code": {
                                "type": "integer"
                            },
                            "errorCause": {
                                "type": "string"
                            },
                            "message": {
                                "type": "string"
                            }
                        },
                        "required": [
                            "status",
                            "message",
                            "code",
                            "errorCause"
                        ]
                    }
                }
                }
                exports.increasePriority = {
                    description: 'Increase the priority of product',
                    tags: ["Ecommerce","Products"],
                    summary: 'Increase priority',
                    body: {
                        "type": "object",
                        "properties": {
                            "productId": {
                                "type": "string"
                            },
                            "priority":{
                                "type":"string",
                            },
                            
                        },
                        "required": [
                            "productId",
                            "priority"
                        ]
                    },
                    response: {
                        200: {
                            description: 'Successful response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string",
                                    "enum": ['faliure', 'success'],
                                },
                                "message": {
                                    "type": "string"
                                },
                                "data": {
                                    "type":"string"
                                },
                                },
                            
                            "required": [
                                    "status",
                                    "data"
                                    ]

                                
                        }, 400: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code"
                            ]
                        },
                        500: {
                            "description": 'Error response',
                            "type": "object",
                            "properties": {
                                "status": {
                                    "type": "string"
                                },
                                "code": {
                                    "type": "integer"
                                },
                                "errorCause": {
                                    "type": "string"
                                },
                                "message": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "status",
                                "message",
                                "code",
                                "errorCause"
                            ]
                        }
                    }
                    }

                    exports.getInventory = {
                        description: 'Get Inventory of Particular Variant',
                        tags: ["Ecommerce","Products"],
                        summary: 'Get Inventory',
                        body: {
                            "type": "object",
                            "properties": {
                                "variantIds": {
                                    "type": "array",
                                    "items":{
                                        "type":"string"
                                    }
                                }
                                
                            },
                            "required": [
                                "variantIds",
                            ]
                        },
                        response: {
                            200: {
                                description: 'Successful response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string",
                                        "enum": ['faliure', 'success'],
                                    },
                                    "message": {
                                        "type": "string"
                                    },
                                    "data": {
                                        
                                                "type":"array",
                                                "items":{
                                                    "type":"object",
                                                    "properties":{
                                                        "variantId":{
                                                            "type":"string"
                                                        },
                                                        "inventory":{
                                                            "type":"number"
                                                        },
                                                        "reservedInventory":{
                                                            "type":"number"
                                                        },
                                                    },
                                                    "required":[
                                                        "variantId",
                                                        "inventory",
                                                        "reservedInventory"
                                                    ]
                                                }
                                       
                                        
                                    },
                                    },
                                
                                "required": [
                                        "status",
                                        "data"
                                        ]
    
                                    
                            }, 400: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code"
                                ]
                            },
                            500: {
                                "description": 'Error response',
                                "type": "object",
                                "properties": {
                                    "status": {
                                        "type": "string"
                                    },
                                    "code": {
                                        "type": "integer"
                                    },
                                    "errorCause": {
                                        "type": "string"
                                    },
                                    "message": {
                                        "type": "string"
                                    }
                                },
                                "required": [
                                    "status",
                                    "message",
                                    "code",
                                    "errorCause"
                                ]
                            }
                        }
                        }
                        exports.reduceInventory = {
                            description: 'Lock Inventory of Particular Variant',
                            tags: ["Ecommerce","Products"],
                            summary: 'Lock Inventory',
                            body: {
                                "type": "object",
                                "properties":{
                                "variantIds":{
                                    "type":"array",
                                    "items":{
                                        "type":"string",
                                            
                                            },
                                    },
                                    "quantities":{
                                        "type":"array",
                                        "items":{
                                            "type":"number",   
                                            },
                                        }
                                },
                                "required": [
                                    "variantIds",
                                    "quantities"
                                ]
                            
                        },
                            response: {
                                200: {
                                    description: 'Successful response',
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "string",
                                            "enum": ['faliure', 'success'],
                                        },
                                        "message": {
                                            "type": "string"
                                        },
                                        "data": {
                                            "type":"string",
                                            "enum":["Inventory Locked Successfully","Insufficient in Stock"]
                                        },
                                        },
                                    
                                    "required": [
                                            "status",
                                            "data"
                                            ]
        
                                        
                                }, 400: {
                                    "description": 'Error response',
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "string"
                                        },
                                        "code": {
                                            "type": "integer"
                                        },
                                        "errorCause": {
                                            "type": "string"
                                        },
                                        "message": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "status",
                                        "message",
                                        "code"
                                    ]
                                },
                                500: {
                                    "description": 'Error response',
                                    "type": "object",
                                    "properties": {
                                        "status": {
                                            "type": "string"
                                        },
                                        "code": {
                                            "type": "integer"
                                        },
                                        "errorCause": {
                                            "type": "string"
                                        },
                                        "message": {
                                            "type": "string"
                                        }
                                    },
                                    "required": [
                                        "status",
                                        "message",
                                        "code",
                                        "errorCause"
                                    ]
                                }
                            }
                            }
                            exports.maintainInventory = {
                                description: 'Maintain Inventory after Payment',
                                tags: ["Ecommerce","Products"],
                                summary: 'Maintain Inventory',
                                body: {
                                    "type": "object",
                                    "properties":{
                                    "variantIds":{
                                        "type":"array",
                                        "items":{
                                            "type":"string",
                                                
                                                },
                                        },
                                        "quantities":{
                                            "type":"array",
                                            "items":{
                                                "type":"number",   
                                                },
                                            },
                                            "message":{
                                                "type":"string"
                                            }
                                    },
                                    "required": [
                                        "variantIds",
                                        "quantities",
                                        "message"
                                    ]
                                
                            },
                                response: {
                                    200: {
                                        description: 'Successful response',
                                        "type": "object",
                                        "properties": {
                                            "status": {
                                                "type": "string",
                                                "enum": ['faliure', 'success'],
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "data": {
                                                // "type":"object",
                                                // "properties":{
                                                //     "variantId":{
                                                //         "type":"string"
                                                //     },
                                                //     "inventory":{
                                                //         "type":"number"
                                                //     },
                                                //     "reservedInventory":{
                                                //         "type":"number"
                                                //     },
                                                // },
                                                // "required":[
                                                //     "variantId",
                                                //     "inventory",
                                                //     "reservedInventory"
                                                // ]
                                            },
                                            },
                                        
                                        "required": [
                                                "status",
                                                "data"
                                                ]
            
                                            
                                    }, 400: {
                                        "description": 'Error response',
                                        "type": "object",
                                        "properties": {
                                            "status": {
                                                "type": "string"
                                            },
                                            "code": {
                                                "type": "integer"
                                            },
                                            "errorCause": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "status",
                                            "message",
                                            "code"
                                        ]
                                    },
                                    500: {
                                        "description": 'Error response',
                                        "type": "object",
                                        "properties": {
                                            "status": {
                                                "type": "string"
                                            },
                                            "code": {
                                                "type": "integer"
                                            },
                                            "errorCause": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            }
                                        },
                                        "required": [
                                            "status",
                                            "message",
                                            "code",
                                            "errorCause"
                                        ]
                                    }
                                }
                                }
// exports.getFolderById = {
//     description: 'Get a folder Info by Id',
//     tags: ['Folder'],
//     summary: 'Get a folder',
//     params: {
//         "type": "object",
//         "properties": {
//             "folderId": {
//                 "type": "string",
//             }
//         },
//         "required": [
//             "folderId"
//         ]
//     },
//     response: {
//         200: {
//             description: 'Successful response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string",
//                     "enum": ['failiure', 'success'],
//                 },
//                 "message": {
//                     "type": "string"
//                 },
//                 "data": {
//                     "type": "object",
//                     "properties": {
//                         "description": {
//                             "type": "string"
//                         },
//                         "folderId": {
//                             "type": "number"
//                         },
//                         "bucketName": {
//                             "type": "string"
//                         },
//                         "folderPath": {
//                             "type": "string"
//                         },
//                         "cdnDomainName": {
//                             "type": "string"
//                         }
//                     },
//                     "required": [
//                         "folderId",
//                         "bucketName",
//                         "folderPath"
//                     ]
//                 }
//             },
//             "required": [
//                 "status",
//                 "data"
//             ]
//         },
//         400: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code"
//             ]
//         },
//         500: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code",
//                 "errorCause"
//             ]
//         }
//     }
// }

// exports.uploadFile = {
//     description: 'Upload a file to a Storage Service such as AWS S3',
//     tags: ['File'],
//     summary: 'Upload a file',
//     params: {
//         "type": "object",
//         "properties": {
//             "folderId": {
//                 "type": "number"
//             }
//         },
//         "required": [
//             "folderId",
//         ]
//     },
//     body: {
//         "type": "object",
//         "properties": {
//             'fileName': {
//                 'type': 'string'
//             },
//             'fileUrl': {
//                 'type': 'string'
//             },
//             'fileContent': {
//                 'type': 'string'
//             },
//             'mimeType': {
//                 'type': 'string'
//             }
//         },
//         "required": [
//             "fileName",
//             "mimeType"
//         ]
//     },
//     response: {
//         201: {
//             description: 'Successful response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string",
//                     "enum": ['failiure', 'success'],
//                 },
//                 "message": {
//                     "type": "string"
//                 },
//                 "data": {
//                     "type": "object",
//                     "properties": {
//                         "folderId": {
//                             "type": "number"
//                         },
//                         "fileURL": {
//                             "type": "string"
//                         }
//                     },
//                     "required": [
//                         "folderId",
//                         "folderURL"
//                     ]
//                 }
//             },
//             "required": [
//                 "status",
//                 "data"
//             ]
//         },
//         400: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code"
//             ]
//         },
//         500: {
//             "description": 'Error response',
//             "type": "object",
//             "properties": {
//                 "status": {
//                     "type": "string"
//                 },
//                 "code": {
//                     "type": "integer"
//                 },
//                 "errorCause": {
//                     "type": "string"
//                 },
//                 "message": {
//                     "type": "string"
//                 }
//             },
//             "required": [
//                 "status",
//                 "message",
//                 "code",
//                 "errorCause"
//             ]
//         }
//     }
// }
