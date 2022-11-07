const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://amine:amine@cluster0.pdnsced.mongodb.net/tasks"
).then(()=>{
console.log("connection successful");
}).catch((e)=>{
console.log("No connection");
})