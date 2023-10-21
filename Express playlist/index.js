const express = require('express');
const app = express();


//simple string response
app.get('/',(req,res)=>{
    res.send('This is home page.');
});
//status code response
app.post('/non',(req,res)=>{
    res.status(404).end("Not found")
});
//json response
app.get("/json",(req,res)=>{

    var myjson =[
        {
            name:"mehedi",
            Age:"26",
            Address:"mirpur 11,dhaka"
        },
        {
            name:"hasan",
            Age:"20",
            Address:"mirpur 7,dhaka"
        }
    ]
    res.json(myjson);
})
//download response

app.get("/donload",(req,res)=>{

    res.download("./img/1.jpg");
})
//redirect response (Bangladesh -> india)

app.get("/Bangladesh",(req,res)=>{
    res.redirect("http://localhost:8000/india")
})
app.get("/india",(req,res)=>{
    res.send("This is India")
})

//header response
app.get('/header', (req, res) => {
    //string  response must need for header response.
    res.setHeader('Name','Md.Mehedi');
    res.send('This is Header');
})
// response cok

app.get('/cookie',(req,res)=>{

    res.cookie('Name','Md.Mehedi');
    res.cookie('Age','26');
    res.end('cokie send success..');
})


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
