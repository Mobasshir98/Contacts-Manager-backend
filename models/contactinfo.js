const mongoose= require('mongoose');
const contactinfo=new mongoose.Schema({
    name:{type:String,required:true},
    designation:{type:String,required:true},
    company:{type:String,required:true},
    industry:{type:String,required:true},
    email:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    country:{type:String,required:true},
    user:{type:String,required:true}
})

const contact = mongoose.model('Contactinfo', contactinfo)
module.exports=contact;