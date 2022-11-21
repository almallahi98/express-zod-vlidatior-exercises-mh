import {z,TypeOf} from 'zod';
const BankSchema=z.object({
    body:z.object({
        id:z.string({required_error:"id Cannot be null"}).min(3,'Length more than 3'),
        username:z.string({required_error:"user Cannot be null"}).min(6,'Length more than 6'),
        password:z.string({required_error:"Password nnot be null"})
        .regex(new RegExp('.*[A-Z].*'))
        .regex(new RegExp('.*[a-z].*'))
        .regex(new RegExp('.*[0-9].*'))
        .regex(new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*')),
        balance:z.number({required_error:'balance Cannot be null'}).min(0,'balance most be positive'),

        //password:z.string({required_error:""})
    })
});

export type BankSchemaType= TypeOf <typeof BankSchema>['body'];