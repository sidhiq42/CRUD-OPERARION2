const mongoose=require('mongoose')

const ProductSchema= mongoose.Schema({
    productname:{
        type:String,
        required:[true,"Enter the product Name"]
    },
    quantity:{
       type:Number,
       required:true,
       default:0
    },
    prize:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        required:false
    },
},{
    timestamps:true
}
)
const ProductModel= mongoose.model('Products',ProductSchema)
module.exports=ProductModel