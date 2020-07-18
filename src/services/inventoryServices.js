const Inventory = require("../models/Inventory")



const getInventory = async (fastify,getInventoryRequest)=>{
    const inventory =  await Inventory.findOne(getInventoryRequest)
    console.log(inventory)
    if(!inventory){
        return ({
            error:"Invalid Variant Id"
        })
    }

    return inventory
}

const reduceInventory = async (fastify,reduceInventoryRequest)=>{
    const inventory =  await getInventory(fastify,{variantId:reduceInventoryRequest.variantId})
    console.log(inventory)
    if(inventory.reservedInventory >= reduceInventoryRequest.quantity){
        inventory.reservedInventory -= reduceInventoryRequest.quantity
        await inventory.save()
        return{
            response:"Inventory Locked Successfully"
        }
    }else{
        return{
            response:"Insufficient in Stock ! Sold Out"
        }
    }

}

const maintainInventory = async (fastify,maintainInventoryRequest)=>{
    const inventory =  await getInventory(fastify,{variantId:maintainInventoryRequest.variantId})
    if(inventory.inventory - inventory.reservedInventory < maintainInventoryRequest.quantity){
            return{
                error:"Mismanagement"
            }
        }
    if (maintainInventoryRequest.message === "success"){
        inventory.inventory -= maintainInventoryRequest.quantity
        
    }else if (maintainInventoryRequest.message === "error"){
        inventory.reservedInventory += maintainInventoryRequest.quantity
    }else {
        return {
            error : "Inventory Command Not found"
        }
    }
    await inventory.save()

    return inventory
}



module.exports = {
    getInventory,
    maintainInventory,
    reduceInventory
}