import { Router } from 'express';
import MatchService from '../Service/MatchService';
import MatchController from '../Controller/MatchController';

const matchesRouter = Router();

const matchService = new MatchService();
const matchController = new MatchController(matchService);

matchesRouter.get('/', matchController.getAll);

export default matchesRouter;
