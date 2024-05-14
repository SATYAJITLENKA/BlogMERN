import express from 'express';
import cors from 'cors'
import connectDb from './dbConnection/dbConnection.js';
import router from './routes/blogRoutes.js';

const app=express();
app.use(express.json())
app.use(cors())
const port=5000;


app.use('/api',router)


app.listen(port,()=>{
    connectDb()
    console.log(`server is running on the port ${port}`)
})
