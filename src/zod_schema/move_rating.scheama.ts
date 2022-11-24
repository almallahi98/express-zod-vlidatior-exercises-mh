import {z,TypeOf} from 'zod';

export const moveSchema=z.object({
    body:z.object({
        name:z.string({required_error:'name is required'}).min(2,'Move name must be at leasrt 2 char'),
        genre:z.enum(['Drama','Action','Comedy'],{required_error:'genre is required'}),
        rating:z.number({required_error:"rating is required"}).min(1,'rating min is 1').max(5,'rating max is 5'),
        duration:z.number({required_error:'duration is required'}).min(60,'duration is less then 60'),
        createdat:z.date({required_error:"date is required"})

    })
});
export const moveSelectByIdSchema=z.object({
    params:z.object({
        id:z.string({required_error:"id is required"})
    })
})

export const getMoveByNameSchema=z.object({
    params:z.object({
        name:z.string({required_error:'name is required'}).min(2,'Move name must be at leasrt 2 char'),
    })
})
export const getMoveByGenreScema=z.object({
    params:z.object({
        genre:z.string({required_error:"oooo"}),
    })
})

export const getMoveByRatingSchema=z.object({
    params:z.object({
        rating:z.number({required_error:"rating is required"}).min(1,'rating min is 1').max(5,'rating max is 5'),
    })
})

export type moveSchemaTypes=TypeOf <typeof moveSchema>['body'];
export type moveIdParams=TypeOf<typeof moveSelectByIdSchema>['params'];
export type getMoveByNameParams=TypeOf <typeof getMoveByNameSchema>['params'];
export type getMoveByGenreParams=TypeOf<typeof getMoveByGenreScema> ['params'];
export type getMoveByRatingParams=TypeOf<typeof getMoveByRatingSchema>['params'];
