const express = require('express');
const app = express();

app.get("/user", (req,res) =>{
    res.send({firstName:"Ithihas",lateName:"Ballal"})
});

app.post("/user",(req,res)=>{
    console.log("Save data to the database");
    res.send("Data successfully saved to the database!!!")
});

app.delete("/user",(req,res) =>{
    res.send("data deleted successfully...!!")
});

app.use('/hello',(req,res)=>{
    res.send("Nameskar Ithihas")
});

app.use('/hello',(req,res)=>{
    res.send("Nameskar Ithihas")
});

app.use('/test',(req,res)=>{
    res.send("check ...check...123...!")
});

app.use('/',(req,res)=>{
    res.send("Hello world!")
});
app.listen(3000, ()=>{
    console.log("Server is successfully listening in port 3000...!");
});