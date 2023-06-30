const express=require("express");
const connectDB=require("./db");
const mongoose=require("mongoose");
connectDB();
require("./models/Postservice");

const app=express();
app.use(express.json());
app.use(express.static ("Public"));
const post=mongoose.model("Posts");
app.set("view engine","ejs");
app.get("/",async (req,res)=>{
     const response=await post.find({});
     res.locals.response=response;
     res.render("dashboard");
 });
// const testfunc=()=>{
//     post.create({
//         title: "sippu utkarsh",
//         description: "you know me",
//     });
// };
// testfunc();
app.use('/posts',require("./Routes/posts"));
app.listen(3000,()=>{
    console.log("listen app is running smoothly")
});