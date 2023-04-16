const express = require("express");
const bodyParser=require("body-parser");
const router =require("./userroute")
const app = express();
const path = require("path");
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/v1",router);

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
});

app.post("/api/v1/register",(req,res)=>{
    const username = req.body.name;
    const useremail = req.body.email;
    const userpassword= req.body.password;
    
     res.json({
        success:true,
       
     });
});

app.post("/api/v1/login",(req,res)=>{
    res.send(`<h1>hello ${req.body.name}</h1><h2>your email is ${req.body.email}</h2>`);
    console.log(req.body);
});

app.listen(port,()=>{
    console.log(`server is working on port :${port}`);
});
