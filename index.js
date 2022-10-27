const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


const Port = process.env.Port || 5000;
const course = require("./data/course.json");

app.get("/",(req,res)=>{
    res.send("server is done")
});
app.get("/course",(req,res)=>{
    res.send(course);
});
app.get("/course/:id",(req,res)=>{
    const id = req.params.id;
    const courss = course.find((p)=>p.id===id);
    res.send(courss);
})

app.listen(Port,()=>{
    console.log("server is run",Port);
})