import blogpost from "../model/blogModel.js";


const getblogs=async(req,res)=>{
   const allblogs=await blogpost.find();
   res.status(201).send(allblogs)
}

const postblogs=async(req,res)=>{
   const {title,description}=req.body
   console.log(title,description)
   try {
      const newBlog=new blogpost({title,description})
      const saveblog=await newBlog.save();
      res.status(201).send(saveblog)
   } catch (error) {
      res.status(400).send(error)
   }
 }

 const updateblogs=async(req,res)=>{
   const {id}=req.params;
   let updatedBlog=req.body;
    const updatedBlogNew=await blogpost.findByIdAndUpdate(id,updatedBlog);
    res.status(201).send("successfully updated")
 }
 const deleteblogs=async(req,res)=>{
   const {id}=req.params;
    await blogpost.findByIdAndDelete(id);
    res.status(201).send("blog deleted")
 }
export {getblogs,postblogs,updateblogs,deleteblogs}