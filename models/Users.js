const mongoose=require("mongoose")
const {Schema} =mongoose
const NewUser =new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }

})


module.exports=mongoose.model("user",NewUser)
