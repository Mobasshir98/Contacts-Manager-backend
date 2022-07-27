const express= require('express');
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://10xacademy:10xacademy@cluster0.kstzf.mongodb.net/contactsmanager?retryWrites=true&w=majority")

const app=express();

app.listen(5000,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Server Started")
    }
})

app.post('/signup', (req,res)=>{

})
app.post('/login', (req,res)=>{

} )

app.get('/',(req,res)=>{
    res.send("Backend")
})

app.post('/post',(req,res)=>{

})