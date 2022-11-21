import {z,TypeOf} from 'zod';

export const moveSchema=z.object({
    body:z.object({
        id:z.string({required_error:'id is required'}).min(3,'id must be 3 charts'),
        name:z.string({required_error:'name is required'}).min(3,'Move name must be at leasrt 3 char'),
        genre:z.enum(['Drama','Action','Comedy'],{required_error:'genre is required'}),
        rating:z.number({required_error:"rating is required"}).min(1,'rating min is 1').max(5,'rating max is 5'),
        duration:z.number({required_error:'duration is required'}).min(60,'duration is less then 60'),


    })
});
export type moveSchemaTypes=TypeOf <typeof moveSchema>['body'];
