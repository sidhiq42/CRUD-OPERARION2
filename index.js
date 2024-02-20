const express= require('express')
const mongoose=require('mongoose')
const app=express()
const router=require('./router/product.router')

app.use(express.json())
app.use('/api',router)

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")
    .then(()=> {
        console.log("Database connected successfully")
    }).catch((error)=> {
        console.log("Error Occured")
    })

app.listen(8080,()=>{
    console.log('server staring at the server 8080')
})
