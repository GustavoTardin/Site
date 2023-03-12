import { Router } from 'express';
import MatchService from '../Service/MatchService';
import MatchController from '../Controller/MatchController';
import Validation from '../middlewares/Validation';

const matchesRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);
const { validateToken, validateScoreBody } = new Validation();

matchesRouter.get('/', matchController.getAll);
matchesRouter.patch('/:id/finish', validateToken, matchController.finishMatch);
matchesRouter.patch('/:id', validateToken, validateScoreBody, matchController.updateScore);

export default matchesRouter;
