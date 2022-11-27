import { prisma } from "../config/db";
import { Role, User } from "@prisma/client";
import { Response, Request, NextFunction } from "express";
import {
    DateSchemaType,
    joningDateSchemaType,
    loginSchemaType,

    UpdatByPassIdSchemaType,

    userByAgeType,
    userByEmail,
    userByRoleType,
    userId,
} from "../zod_schema/User.schema";

export const getAllUsers = async (
    res: Response,
    req: Request,

) => {
    try {
        const Users = await prisma.user.findMany();
        return res.status(200).json(Users);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

export const addNewUser = async (
    res: Response,
    req: Request,
) => {
    try {
        const NewUser = req.body as User;
        await prisma.user.create({ data: NewUser });
        return res.status(201).json({ msg: "new user is added.." });
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
export const getUserById = async (
    res: Response,
    req: Request,
) => {
    try {
        const { id } = req.params as userId;
        const user = await prisma.user.findUnique({ where: { id } });
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "user not fund.." });
    }
};

export const getUserByEmail = async (
    res: Response,
    req: Request,
) => {
    try {
        const { email } = req.params as userByEmail;
        const user = prisma.user.findUnique({ where: { email } });
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ msg: "user is not fund.." });
    }
};
export const getUserByAgeOlder = async (
    res: Response,
    req: Request
) => {
    try {
        const { age } = req.params as unknown as userByAgeType;
        const userList = await prisma.user.findMany({
            where: { age: { gt: age } },
        });
        return res.status(200).json(userList);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

export const getUserByRole = async (
    res: Response,
    req: Request,
) => {
    try {
        const { role } = req.params as userByRoleType;
        const userList = await prisma.user.findMany({
            where: {
                role: role as Role,
            },
        });
        return res.status(200).json(userList);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};
export const useLogin = async (
    res: Response,
    req: Request
) => {
    try {
        const { username, password } = req.body as loginSchemaType;
        const user = await prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                },
                password: {
                    equals: Number(password),
                },
            },
        });
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err);
    }
};

export const updateUserPassword = async (
    res: Response,
    req: Request,
) => {
    try {

        const { password, id } = req.body as UpdatByPassIdSchemaType;
        const user = await prisma.user.update({
            where: { id: id },
            data: { password: password },
        });
        return res.status(201).json(user);
    } catch (err) { }
};

export const getUserByJoinDate = async (
    res: Response,
    req: Request) => {
    try {
        //const id=req.params as userId;
        const { joiningYear, id } = req.body as DateSchemaType;
        const user = await prisma.user.findFirst({
            where: {
                id: id,
                joiningYear: joiningYear,
            }
        })
        return res.status(200).json(user);
    } catch (err) {
        console.log(err);
        return res.status(400).json(err)

    }
}

export const getAllUsersByJoiningDate = async (
    res: Response,
    req: Request) => {
    try {
        const { joiningYear } = req.body as joningDateSchemaType;
        const Users = await prisma.user.findMany({ where: { joiningYear: { gte: joiningYear } } })
        return res.status(200).json(Users);
    }
    catch (err) {
        console.log(err);
        return res.status(400).json(err)
    }
}