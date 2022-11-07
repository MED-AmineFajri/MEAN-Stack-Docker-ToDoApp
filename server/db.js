const mongoose=require("mongoose");
var Schema = mongoose.Schema;
var TaskSchema=new Schema({
 task:{
 type:String,
 required:true,
 trim:true
 },
 complete:{
    type:Boolean,
    default:false
    }
})
module.exports = mongoose.model('Task', TaskSchema);