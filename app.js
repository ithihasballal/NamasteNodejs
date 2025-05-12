const express = require('express');
const app = express();
const adminAuth = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData",(req,res) =>{
    res.send("All Data Sent")
});

app.get("/admin/deleteUser",(req,res) =>{
    res.send("Deleted a user")
});

app.use("/user", (req,res, next) =>{
    console.log("First handler:Response!!!!")
    next();
    //res.send("what happens now");
},
(req,res) =>{
    res.send("Second handler:2nd Response")
});

app.listen(3000, ()=>{
    console.log("Server is successfully listening in port 3000...!");
});