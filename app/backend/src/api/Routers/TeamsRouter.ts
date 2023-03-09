import { Router } from 'express';
import TeamService from '../Service/TeamsService';
import TeamsController from '../Controller/TeamsController';

const teamsRouter = Router();

const teamService = new TeamService();
const teamController = new TeamsController(teamService);

teamsRouter.get('/', teamController.getAll);
teamsRouter.get('/:id', teamController.getById);

export default teamsRouter;
