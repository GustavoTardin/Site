import { Router } from 'express';
import { LeaderBoardController } from '../Controller';
import { LeaderboardService } from '../Service';

const leaderBoardRouter = Router();

const leaderboardService = new LeaderboardService();
const leaderBoardController = new LeaderBoardController(leaderboardService);

leaderBoardRouter.get('/home', leaderBoardController.getHomeInfo);
leaderBoardRouter.get('/away', leaderBoardController.getAwayInfo);
leaderBoardRouter.get('/', leaderBoardController.getFullLeaderboard);
export default leaderBoardRouter;
