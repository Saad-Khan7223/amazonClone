import express from 'express'
import data from './data.js';
const app=express();
const port=process.env.port || 5000
app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.listen(port,()=>(console.log('Listening to '+port)))