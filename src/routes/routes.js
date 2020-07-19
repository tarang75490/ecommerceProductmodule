const controllers = require('../controllers/controller')
const validators = require('../validators/validators')

// Import Swagger documentation
const documentation = require('./documentation/documentServicesApis')

const routes = [
    {
        method: "POST",
        url: "/createProduct",
        handler: controllers.createProduct,
        schema: documentation.createProduct,
        preValidation: validators.validateCreateProductRequest
    },
    {
        method: "POST",
        url: "/getProduct",
        handler: controllers.getProducts,
        schema: documentation.getProducts,
        preValidation: validators.validateGetProductRequest
    },
    {
        method: "POST",
        url: "/createCategory",
        handler: controllers.createCategory,
        schema: documentation.createCategory,
        preValidation: validators.validateCreateCategoryRequest
    },
    {
        method: "GET",
        url: "/getSubCategories",
        handler: controllers.getSubCategories,
        schema: documentation.getSubCategories,
        preValidation: validators.validateGetSubCategoriesRequest
    },
    {
        method: "GET",
        url: "/getFeatures",
        handler: controllers.getFeatures,
        schema: documentation.getFeatures,
        preValidation: validators.validateGetFeaturesRequest
    },
    {
        method: "POST",
        url: "/createVariant",
        handler: controllers.createVariant,        
        schema: documentation.createVariant,
        preValidation: validators.validateCreateVariantRequest
    },
    {
        method: "POST",
        url: "/increasePriorityByProductId",
        handler: controllers.increasePriorityofProduct,        
        schema: documentation.increasePriority,
        preValidation: validators.validateincreasePriorityRequest
    },
    {
        method: "GET",
        url: "/getVariants",
        handler: controllers.getVariants,
        schema: documentation.getVariants,
        preValidation: validators.validateGetVariantsRequest
    },
    {
        method: "GET",
        url: "/inputBrowse",
        handler: controllers.inputBrowse, 
        schema: documentation.inputBrowse,
        preValidation: validators.validateInputBrowseRequest       
    },
    {
        method: "POST",
        url: "/filterBrowse",
        handler: controllers.filterBrowse, 
        schema: documentation.filterBrowse,
        preValidation: validators.validateFilterBrowseRequest       
    },
    {
        method: "POST",
        url: "/uploadImage",
        handler: controllers.uploadFile, 
        // schema:documentation.uploadFile,
        // preValidation: validators.validateUploadFileRequest       
    },
    {
        method: "POST",
        url: "/getInventory",
        handler: controllers.getInventory, 
        schema:documentation.getInventory,
        preValidation: validators.validateGetInventoryRequest    
    },
    {
        method: "POST",
        url: "/reduceInventory",
        handler: controllers.reduceInventory, 
        schema:documentation.reduceInventory,
        preValidation: validators.validateReduceInventoryRequest    
    },    
    {
        method: "POST",
        url: "/maintainInventory",
        handler: controllers.maintainInventory, 
        schema:documentation.maintainInventory,
        preValidation: validators.validateMaintainInventoryRequest    
    }
    
]


module.exports = routes