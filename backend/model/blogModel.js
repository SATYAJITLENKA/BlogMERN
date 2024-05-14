import mongoose from "mongoose";

const blogSchema=new mongoose.Schema ({
    "title":String,
    "drescription":String
})

const blogpost=mongoose.model('blogpost',blogSchema)
export default blogpost;