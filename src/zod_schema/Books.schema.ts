import { TypeOf, z } from 'zod';

export const AddNewBookSchema = z.object({
    body: z.object({
        book_name: z.string({ required_error: "the book name is required.." }),
        genre: z.enum(["Drama", "Action", "Comedy"], { required_error: "" }),
    })
})
export type AddNewBookSchemaType = TypeOf<typeof AddNewBookSchema>['body'];

export const addNewLoanSchema = z.object({
    body: z.object({
        userId: z.string({ required_error: "" }),
        bookID: z.string({ required_error: "" })
    })
})
export type addNewLoanType=TypeOf<typeof addNewLoanSchema>['body'];

export const getLoansByIdsSchema=z.object({
    params:z.object({
        userId:z.string({required_error:"user id is required"}),
        bookId:z.string({required_error:"book id is required"}),
    })
})
export type getLoansByIdsSchema=TypeOf<typeof getLoansByIdsSchema>['params'];
