import {Request,Response,NextFunction} from 'express'
import {AnyZodObject,ZodError} from 'zod'

const validate=(schema:AnyZodObject)=>
(req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse({
            body:req.body,
            params:req.params,
            query:req.query,
            headers:req.headers,
        })

    }
    catch(err){
        const zodErorr=err as ZodError;
        return res.status(400).json({msg:zodErorr.errors[0].message,})
    }
}
export default validate;