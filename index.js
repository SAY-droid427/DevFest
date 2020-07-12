const express=require('express');
const app=express();

app.use(express.static('public'));

const PORT=process.env.PORT ||3000;


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.get('/health',(req,res)=>{
    res.sendFile(__dirname+'/public/health.html')
})

app.get('/fit',(req,res)=>{
    res.sendFile(__dirname+'/public/fit.html')
})

app.get('/low',(req,res)=>{
    res.sendFile(__dirname+'/public/low.html')
})

app.get('/high',(req,res)=>{
    res.sendFile(__dirname+'/public/high.html');
})

app.listen(PORT,()=>console.log("Server is running successfully at port 3000"));