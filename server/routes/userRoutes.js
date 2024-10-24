const express=require("express");
const router=express.Router();


const{
    registerUser,
    loginUser
}=require("../controllers/userController");

//route for user registeration 
router.post("/register",registerUser);

//route for user login 
// router.post("/login",loginUser);

module.exports=router;