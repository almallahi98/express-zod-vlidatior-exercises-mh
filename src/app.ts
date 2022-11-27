import express from 'express';
import router from './routes/move.router'
import {router as userRouter} from './routes/User.router';
const app=express();
app.use(express.json());
app.use('/api/v1/move',router);
app.use('/api/v1/user',userRouter);

app.listen(5000,()=>{
    console.log('Server is up and running in port 5000');
});