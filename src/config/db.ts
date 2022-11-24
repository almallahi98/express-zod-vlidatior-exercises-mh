import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

const connectDb=()=>{
    try{
        prisma.$connect();
        console.log('dataBade is up and running....');
        
    }
    catch(err)
    {
        console.log(err);
        process.exit(1);
    }
}
export {connectDb,prisma};