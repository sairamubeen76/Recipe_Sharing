const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("wellcome");
})
app.get('/about',(req,res)=>{
    res.send("bye");
})

app.listen(4000,()=>{
    console.log("listening to port 4000")
});