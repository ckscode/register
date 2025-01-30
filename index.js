import express from 'express';
import dotenv from 'dotenv'
import connectDB from './Config/Config.js';
import userRouter from './Routes/userRoutes.js';

import cors from 'cors';
import bodyParser from 'body-parser';

const app = express()
dotenv.config();

connectDB()
app.use(cors({
    origin:"*",
    credentials:true,
}
));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',userRouter)


app.listen(process.env.PORT,()=>
    console.log(`app is listening`))