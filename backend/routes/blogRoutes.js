import { Router } from "express";
import { postblogs,getblogs,updateblogs,deleteblogs } from "../controller/blogController.js";


const router=Router()
router.post("/post",postblogs)
router.get("/blogs",getblogs)
router.put("/update/:id",updateblogs)
router.delete("/delete/:id",deleteblogs)



export default router