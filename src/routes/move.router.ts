import express from 'express';
import validate from '../middleware/validate';
import { moveSchemaTypes} from '../zod_schema/move_rating.scheama';

const router=express.Router();
let Moves:moveSchemaTypes[]=[];

router.get('/',(req,res,next)=>{
    return res.json(Moves);
});

router.post('/',(req,res,next)=>{
    const newMove=req.body as moveSchemaTypes;
    Moves.push(newMove);
    return res.status(201).json({msg:"move is added.."});
});

router.put('/:id',(req,res,next)=>{
    const updateMove=req.body as moveSchemaTypes;
    const id =req.params.id;
    const newMoveArr= Moves.filter(elm=>{
        return elm.id !== id; 
    });
    newMoveArr.push(updateMove);
    Moves=newMoveArr;
    return res.status(201).json({msg:"Move added"});
});

router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    const newArr= Moves.filter(elm=>{
        return elm.id !== id;
    })
    Moves=newArr;
    return res.status(201).json({msg:"deleted"})
});
    
export default router;