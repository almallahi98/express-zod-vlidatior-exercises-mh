import express from 'express';
import validate from '../middleware/validate';
import { getMoveByGenreScema, getMoveByNameSchema, getMoveByRatingSchema, moveSchema, moveSelectByIdSchema} from '../zod_schema/move_rating.scheama';
import {getMoves,addNEwMove,updateMove, deleteMove, getMoveByName, getAllMovesWithGenre, getAllMoveWithRating} from '../controller/move.controller'

const router=express.Router();

router.get('/',getMoves);
router.post('/',validate(moveSchema),addNEwMove);
router.put('/:id',validate(moveSelectByIdSchema),updateMove);
router.delete('/:id',validate(getMoveByNameSchema),deleteMove);
router.get('/:name',getMoveByName);
router.get('/:genre',getAllMovesWithGenre);
router.get('/:rating',getAllMoveWithRating)

export default router;