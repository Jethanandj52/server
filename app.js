 
const express= require('express')
 

const app= express()
const port= 4000


app.get('/',(req,res)=>{
    const user=[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "description": "A smooth and fast wireless mouse with ergonomic design.",
    "price": 1500,
    "category": "Electronics",
    "image": "https://via.placeholder.com/150",
    "stock": 20
  },
  {
    "id": 2,
    "name": "Bluetooth Headphones",
    "description": "Over-ear headphones with noise cancellation and long battery life.",
    "price": 3200,
    "category": "Electronics",
    "image": "https://via.placeholder.com/150",
    "stock": 15
  },
  {
    "id": 3,
    "name": "Laptop Stand",
    "description": "Adjustable aluminum laptop stand for better ergonomics.",
    "price": 1800,
    "category": "Accessories",
    "image": "https://via.placeholder.com/150",
    "stock": 30
  },
  {
    "id": 4,
    "name": "Gaming Keyboard",
    "description": "Mechanical RGB keyboard with customizable lighting.",
    "price": 4500,
    "category": "Gaming",
    "image": "https://via.placeholder.com/150",
    "stock": 10
  },
  {
    "id": 5,
    "name": "USB-C Charger",
    "description": "Fast charging USB-C wall adapter with 30W output.",
    "price": 1200,
    "category": "Mobile Accessories",
    "image": "https://via.placeholder.com/150",
    "stock": 50
  }
]

    res.send(user)
})

 

app.listen(port,()=>{
    console.log("welcome",port);
    
})

 
