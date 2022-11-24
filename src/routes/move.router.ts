import express from 'express';
import validate from '../middleware/validate';
import { getMoveByGenre, moveSchemaTypes} from '../zod_schema/move_rating.scheama';
import {getMoves,addNEwMove,updateMove, deleteMove, getMoveByName, getAllMovesWithGenre, getAllMoveWithRating} from '../controller/move.controller'

const router=express.Router();


router.get('/',getMoves);
router.post('/',addNEwMove);
router.put('/:id',updateMove);
router.delete('/:id',deleteMove);
router.get('/:name',getMoveByName);
router.get('/:genre',validate(getMoveByGenre),getAllMovesWithGenre);
router.get('/:rating',getAllMoveWithRating)



export default router;