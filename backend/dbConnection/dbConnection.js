import mongoose from "mongoose";
const uri='mongodb+srv://satya09jit:M0ijPBAxcm70CAvp@cluster0.bacf889.mongodb.net/blog'
// pass=M0ijPBAxcm70CAvp
const connectDb=async()=>{
    try {
        const connection=await mongoose.connect(uri)
        if(connection){
            console.log("Database Connected")
 
        }else{
            console.log("Failed to connect")
        }
    } catch (error) {
        console.log(error)
    }
  
   
}



export default connectDb ;