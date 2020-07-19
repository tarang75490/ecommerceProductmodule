const Inventory = require("../models/Inventory")



const getInventory = async (fastify,getInventoryRequest)=>{
    console.log(getInventoryRequest)
    const inventory =  await Inventory.find({variantId :{$in:getInventoryRequest.variantIds} })
    console.log(inventory)
    if(inventory.length !== getInventoryRequest.variantIds.length){
        return ({
            error: (getInventoryRequest.variantIds.length -inventory.length )+" Variant Id invalid"
        })
    }

    return inventory
}

const reduceInventory = async (fastify,reduceInventoryRequest)=>{
    console.log(reduceInventoryRequest)
    const inventory =  await getInventory(fastify,{variantIds:reduceInventoryRequest.variantIds})
    if(inventory.error){
        return inventory.error
    }
    for(let i =0 ;i<reduceInventoryRequest.variantIds.length;i++){
        inventory[i].reservedInventory -= reduceInventoryRequest.quantities[i]
        console.log(inventory[i])
        await new Inventory(inventory[i]).save()
    }

    // if(inventory.reservedInventory >= reduceInventoryRequest.quantity){
    //     inventory.reservedInventory -= reduceInventoryRequest.quantity
    //     await inventory.save()
        return{
            response:"Inventory Locked Successfully"
        }
    // }else{
    //     return{
    //         response:"Insufficient in Stock ! Sold Out"
    //     }
    // }

}

const maintainInventory = async (fastify,maintainInventoryRequest)=>{
    console.log(maintainInventoryRequest)
    const inventory =  await getInventory(fastify,{variantIds:maintainInventoryRequest.variantIds})
    const size = maintainInventoryRequest.variantIds.length

    for(let i =0 ;i<size;i++){
        if(inventory[i].inventory - inventory[i].reservedInventory < maintainInventoryRequest.quantities[i]){
                return{
                    error:"Mismanagement"
                }
            }
    }
    for(let i =0 ;i<size;i++){
    
    if (maintainInventoryRequest.message === "success"){
     
            inventory[i].inventory -= maintainInventoryRequest.quantities[i]
            await new Inventory(inventory[i]).save()
        
        
    }else if (maintainInventoryRequest.message === "error"){
        
            inventory[i].inventory += maintainInventoryRequest.quantities[i]
            await new Inventory(inventory[i]).save()
        
    }else {
        return {
            error : "Inventory Command Not found"
        }
    }
}

    return inventory
}



module.exports = {
    getInventory,
    maintainInventory,
    reduceInventory
}