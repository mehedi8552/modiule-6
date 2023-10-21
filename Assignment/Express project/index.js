//npm install express --save
//package.json file:npm init --y
//npm install
// npm install -g nodemon . Then write nodemon index.js
// npm install cors
//npm install body-parser

var express = require('express');
var app = express();
var bodyParsr = require('body-parser')

app.use(bodyParsr.json());
var cors = require('cors')
app.use(cors());

app.get("/",(req,res)=>{

    var frute = {
        product : "Mango",
        price: 100
    }
    res.send(frute)
    res.end("Hello i am express....")
})

app.get ("/frute",(req,res)=>{

    res.send({product:'mango',price:100,address:'Rajsahi'})
})

const user = ['Asad','Rabya','Kamija','kismot','habiba','rahima'] 
app.get("/User/:id",(req,res)=>{

  var id =req.params.id;
  var name = user[id]
  res.send({id,name})
})

app.post("/Adduser",(req,res)=>{

    var JsonData = req.body;
    var StringData = JSON.stringify(JsonData)

    res.end(StringData)
})
app.listen(8000,()=>console.log("server is running..."))