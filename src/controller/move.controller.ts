import {Movie} from '@prisma/client';
import {PrismaClientKnownRequestError} from '@prisma/client/runtime';
import {Response,Request,NextFunction}from 'express'; 
import { prisma } from '../config/db';
import { getMoveByGenreParams, getMoveByNameParams, moveIdParams, moveSchema, moveSchemaTypes} from '../zod_schema/move_rating.scheama';

const getMoves= async(
    req:Request,
    res:Response,
    next:NextFunction,
)=>{
    try{
        const Moves=await prisma.movie.findMany();
        return res.status(200).json(Moves);
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({msg:"server error !!"})
        
    }
}

const addNEwMove= async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const Move=req.body as moveSchemaTypes;
        await prisma.movie.create({data:Move});
        return res.status(201).json({msg:"Move added.."})
    }
    catch(err){

    }
}

const updateMove= async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const newMove= req.body as Movie;
        const {id} = req.params as moveIdParams;
        await prisma.movie.update({
            where:{id},
            data:newMove,
        })
    }
    catch(err){
        console.log(err);
        
    }
}

const deleteMobe=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {id} = req.params as moveIdParams;
        await prisma.movie.delete({
            where:{id}
        })
        return res.status(200).json({msg:"move deleted.."})
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({msg:err});
        
    }
}

const getMoveByName= async(res:Response,req:Request,next:NextFunction)=>{
    try{
        const moveReq =req.body as getMoveByNameParams;
        const move= await prisma.movie.findFirst({
            where:{name:moveReq.name}
        })
        return res.status(200).json(move);
    }
    catch(err){
        console.log(err);
        return res.status(400).json({msg:"error.."})
        
    }
}

const getAllMovesWithGenre= async(res:Response,req:Request,next:NextFunction)=>{
    try{
        const reqParams= req.params as getMoveByGenreParams;
        const moveList=await prisma.movie.findMany({
        where:{genre: reqParams.genre},
    })
    return res.status(200).json(moveList);
    }
    catch(err){

    }
}