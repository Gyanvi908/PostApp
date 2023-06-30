const mongoose=require("mongoose")

const PostSchema= new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        default: "",
    },
    createdAT:{
        type: String,
        defauly: "",
    },
});
mongoose.model("Posts",PostSchema);