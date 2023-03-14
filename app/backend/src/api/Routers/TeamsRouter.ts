import { Router } from 'express';
import TeamService from '../Service/TeamService';
import TeamsController from '../Controller/TeamController';

const teamsRouter = Router();

const teamService = new TeamService();
const teamController = new TeamsController(teamService);

teamsRouter.get('/', teamController.getAll);
teamsRouter.get('/:id', teamController.getById);

export default teamsRouter;
