import express from "express";
import validate from '../middleware/validate';
import { StudentSchemaTypes,StudentSchema } from "../zod_schema/student.schema";

const router = express.Router();
let Students:StudentSchemaTypes[]=[];


router.get("/",(req,res,next)=>{
    return res.status(200).json(Students);
});

router.post("/",validate(StudentSchema),(req,res,next)=>{
    const newStudent=req.body as StudentSchemaTypes;
    Students.push(newStudent);
    return res.status(201).json({msg:"student added.."});
});

router.put('/update/:id',validate(StudentSchema),(req,res,next)=>{
    const id=req.params.id;
    const updateStudent=req.body as StudentSchemaTypes;
    const newStudentArr=Students.filter(elm=>{
        return elm.id !==id;
    });
    newStudentArr.push(updateStudent);
    return res.status(201).json({msg:"updated.."});
});

router.delete('/delete/:id',(req,res,next)=>{
    const id= req.params.id;
    const newStudentArr=Students.filter(elm=>{
        return elm.id !== id;
    })
    Students=newStudentArr;
    return res.status(201).json({msg:"deleted.."});
})

router.get('/:maj',(req,res,next)=>{
    const major= req.params.maj;
    const arr=Students.filter(elm=>{
        return elm.major ===major;
    })
    return res.status(201).json(arr);
})

router.put('/:id',validate(StudentSchema),(req,res,next)=>{
    const id=req.params.id;
    const student= req.body as StudentSchemaTypes;
    const arr=Students.filter(elm=>{
        return elm.id !== id;
    })
    arr.push(student);
    Students=arr;
    return res.status(201).json({msg:"student is updated"});
})