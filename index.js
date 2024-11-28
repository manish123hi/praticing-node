const express = require("express")

const app = express()
const PORT = process.env.PORT||5000;

app.get("/",(req,res)=>{
    return res.json({message:'Helloe from Express Server '});
})

app.listen(PORT,()=>console.log(`server is runninh on the port:${PORT}`))