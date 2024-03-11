const express=require("express");

const app=express()
const port = 3000;
app.get('/',(req,res)=>{
    console.log(req.body)
    // res.send("hello world")
    res.json({"name":"workings"})

})

app.listen(port,()=>{
    console.log(`The server has started on the port${port}`)
})
