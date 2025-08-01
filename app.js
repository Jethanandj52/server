 
const express= require('express')
 

const app= express()
const port= 3000


app.get('/',(req,res)=>{
    const user=[
        {
            name:"Tariq",
            age:22,
            email:"tariq@gmail.com"
        },
        {
            name:"Noor",
            age:23,
            email:"noor@gmail.com"
        }
    ]
    res.send(user)
})

 

app.listen(port,()=>{
    console.log("welcom",port);
    
})

 
