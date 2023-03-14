const mongoose=require("mongoose")
const {Schema} =mongoose
const newproduct =new Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String,      
})



module.exports=mongoose.model("product",newproduct)
