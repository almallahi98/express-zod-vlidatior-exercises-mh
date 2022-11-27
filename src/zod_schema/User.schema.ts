import {z,TypeOf, string} from 'zod';

export const user=z.object({
    body:z.object({
        username:z.string({required_error:"username required"}),
        password:z.string({required_error:"password required"}),
        email:z.string({required_error:"email required"}),
        role:z.enum(["Admin ","user"],{required_error:"Select role"}),
        joiningYear:z.string({required_error:"joiningYear is required"}),
        age:z.number({required_error:"age is required"}),
    })
});

export const byUserId=z.object({
    params:z.object({
        id:z.string({required_error:"id required"})
    })
});

export const byEmail=z.object({
    params:z.object({
        email:z.string({required_error:"email required"}),
    })
})

export const byAgeSchema=z.object({
    params:z.object({
        age:z.number({required_error:"age is required"}),
    })
})
export const byRoleSchema=z.object({
    params:z.object({
        role:z.enum(["Admin ","user"],{required_error:"Select role"}),
    })
})
export const loginSchema=z.object({
    body:z.object({
        username:z.string({required_error:"username required"}),
        password:z.string({required_error:"password required"}),
    })
})
export const DateSchema=z.object({
    body:z.object({
        id:z.string({required_error:"id "}),
        joiningYear:z.string({required_error:"joiningYear is required"}),
    })
})
export const joningDateSchema=z.object({
    body:z.object({
        joiningYear:z.string({required_error:"joiningYear is required"}),
    })
})

export type userId =TypeOf <typeof byUserId>['params'];
export type userByEmail=TypeOf <typeof byEmail>['params'];
export type userByAgeType=TypeOf<typeof byAgeSchema>['params']
export type userByRoleType=TypeOf<typeof byRoleSchema>['params']
export type loginSchemaType=TypeOf<typeof loginSchema>['body']
export type DateSchemaType=TypeOf<typeof DateSchema>['body'];
export type joningDateSchemaType=TypeOf<typeof joningDateSchema>['body'];
