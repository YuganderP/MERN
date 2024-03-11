const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    const data = req.query.n;
        res.json({"data":data})


})
const port = 3000;
app.listen(port,()=>{
    console.log("the server has started")
})