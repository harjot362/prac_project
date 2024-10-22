/*
dr  appointment ---- 
id:, name:string
dr specialization:String
//phone no hospital no , address string
//available slot:20  */

//framework configuration 


const express = require('express')
const connectDb=require("./config/dbConnection")
const errorHandler=require('./middlewares/errorHandler')
const cors=require("cors"); 

//env file config
const dotenv=require("dotenv");
dotenv. config();

connectDb();
const app=express();
const port =process.env.PORT || 5000; 


app.use(express.json());
app.use(cors());

//routes below 
app.get('/',(req,res)=>{
    res.send("working");
});

//error handling middleware 
app.use(errorHandler)

//app config start 
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})