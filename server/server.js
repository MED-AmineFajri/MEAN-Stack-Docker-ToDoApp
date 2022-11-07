const express = require('express');
require("./conn");
const cors=require("cors")
const Task=require("./db")
const app = express(),
      bodyParser = require("body-parser");
      port = 3000;

const tasks = [];

app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example/"));

app.get("/api/tasks",async(req,res)=>{
  Task.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})
/*app.get("/api/tasks",async(req,res)=>{
  try{
  const getTask=await Task.find();
  const count = await Property.countDocuments();
  res.send(getTask);
  }catch(e){
  res.status(400).send(e);
  }
})*/

app.post("/api/tasks",async(req,res)=>{
  try{
      const addingTaskRecords=new Task({task: req.body.task})
      console.log(req.body);
      const insertTask=await addingTaskRecords.save();
      res.send(insertTask);
  }catch(e){
      res.status(400).send(e);
  }
  })

  app.patch("/api/tasks/:id",async(req,res)=>{
      try{
      const _id=req.params.id;
       const getTask=await
      Task.findByIdAndUpdate(_id,{complete:true});
      res.send(getTask);
      }catch(e){
          res.status(400).send(e);
      }
  })

  app.delete("/api/tasks/:id",async(req,res)=>{
      try{
      const _id=req.params.id;
      const getTask=await Task.findByIdAndDelete(_id);
      res.send(getTask);
      }catch(e){
          res.status(400).send(e);
      }
  })

/*app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/my-app/dist/angular-nodejs-example/index.html");
});*/

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});