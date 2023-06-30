const mongoose=require("mongoose")

const connectDB=async ()=>{
  try{
     const connection=await mongoose.connect(
        "mongodb+srv://gyanvi0109:Gyanvi%4022@gyanvi22.wbg0asb.mongodb.net/?retryWrites=true&w=majority",
        {
           useNewUrlParser: true,
           useUnifiedTopology: true,
        }
     );
     console.log("mongoDB connected");
  }
  catch(error){
      console.log(error)
      process.exit(1)
  }
};
module.exports=connectDB;