import {z,TypeOf} from 'zod';

export const StudentSchema=z.object({
    body:z.object({
        id:z.string({required_error:"id Cannot be null"}).min(3,"min id lenght is 3"),
        name:z.string({required_error:"name Cannot be null"}).min(3,"Cannot be null"),
        major:z.enum(['IT','IS','CS','SWE'],{required_error:"you must select you'r major"}),
        Level:z.number({required_error:"Level Cannot be null"}).min(1,{message:"Level must be above 1"}).max(8,{message:"Level must be not grater then 8"}),
        GPA:z.number({required_error:"GPA Cannot be null"}).min(0,{message:"GPA min is 0"}).max(5,{message:"GPA max is 5"}),
    })
});

export type StudentSchemaTypes=TypeOf <typeof StudentSchema>['body'];