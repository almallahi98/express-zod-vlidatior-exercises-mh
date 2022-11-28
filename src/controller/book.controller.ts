import { Books, BookUser, Loan} from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { getLoansByIdsSchema } from '../zod_schema/Books.schema';

const router =express.Router();

export const addNewUser=async(res:Response,req:Request)=>{
    try{
        const newUser= req.body as BookUser;
        await prisma.bookUser.create({data:newUser});
        return res.status(201).json({msg:"new user added.."})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err})
        
    }
}

export const getUsers=async(res:Response,req:Request)=>{
     try{
        const users=await prisma.bookUser.findMany();
        return res.status(200).json(users);
     }
     catch(err){
        console.log(err);
        return res.status(400).json({msg:err})
     }
}

export const addNewBook= async(res:Response,req:Request)=>{
    try{
        const newBook=req.body as Books;
        await prisma.books.create({data:newBook});
        return res.status(201).json({msg:"new Book is added.."})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err});
        
    }
}
export const getAllBooks=async(res:Response,req:Request)=>{
    try{
        const Books=await prisma.books.findMany();
        return res.status(200).json(Books);
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err)
        
    }
}

export const getAllLoans=async(res:Response,req:Request)=>{
    try{
        const Loans=await prisma.loan.findMany();
        return res.status(200).json(Loans);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:err});
        
    }
}

export const addNewLoan=async(res:Response,req:Request)=>{
    try{
        const loan= req.body as Loan;
        await prisma.loan.create({data:loan})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({msg:err});
        
    }
}

export const getLoanById=async(res:Response,req:Request)=>{
    try{
        const {userId,bookId}= req.params as getLoansByIdsSchema;
        const loans= await prisma.loan.findMany({where:{
            userId:userId,
            AND:{BookId:bookId}
        }})
        return res.status(200).json(loans);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:err});
    }
}

export const getLoansbyBookId= async(res:Response,req:Request)=>{
    try{
        const {BookId}=req.params;
        const loans=await prisma.loan.findMany({where:{
            BookId
        }})
        return res.status(200).json(loans);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:err});
        
    }
}