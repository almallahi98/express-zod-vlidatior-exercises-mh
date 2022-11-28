import express from 'express';
import { addNewBook, addNewLoan, addNewUser, getAllBooks, getAllLoans, getLoanById, getLoansbyBookId, getUsers } from '../controller/book.controller';

export const router=express.Router();

router.post('/adduser',addNewUser);
router.get('/getusers',getUsers);
router.post('/addnewbook',addNewBook);
router.get('/getallbooks',getAllBooks);
router.get('/getallloans',getAllLoans);
router.post('/addnewloan',addNewLoan);
router.get('/getloan/:userId/:bookId',getLoanById);
router.get('/getLoansbyBookId/:BookId',getLoansbyBookId);

