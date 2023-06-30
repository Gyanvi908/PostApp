const express=require("express");
const mongoose=require("mongoose");
const window=require("window");
const router=express.Router();

const post=mongoose.model('Posts');
router.get("/create/new",(req,res)=>{
  res.render('create_post');
  res.redirect("/")
})

router.post("/create/new",async (req,res)=>{
  console.log(req.body);
  const {title,description,createdAT}=req.body;
  const got=await post.create({
    title: title,
    description: description,
    createdAT: createdAT,
  });
  console.log(got);
  res.send({
    status:"Successful"
  })
})

module.exports=router;