var mongoose=require("mongoose")
const productSchema= new mongoose.Schema(
    {
        productname:{type:String},
        description:{type:String},
        price:{type:Number},
        distributor:{type:String},
        manufacture:{type:String},
        yearofmanufacture:{type:String}
    }
)
var productModel= mongoose.model("products", productSchema)
module.exports={productModel}