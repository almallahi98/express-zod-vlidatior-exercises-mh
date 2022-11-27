import express from 'express';
import { addNewUser, getAllUsers, getAllUsersByJoiningDate, getUserByAgeOlder, getUserByEmail, getUserById, getUserByJoinDate, getUserByRole, updateUserPassword, useLogin } from '../controller/Use.controller';
import validate from '../middleware/validate';

export const router=express.Router();

router.get('/',getAllUsers);
router.post('/',addNewUser);
router.get('/:id',getUserById);
router.get('/:email',getUserByEmail);
router.get('/:age',getUserByAgeOlder);
router.get('/:role',getUserByRole);
router.post('/login',useLogin);
router.put('/updatepassword',updateUserPassword);
router.post('/getUserByJoinDate',getUserByJoinDate);
router.post('/getAllUsersByJoiningDate',getAllUsersByJoiningDate);

