import { Request, Response } from 'express';
import { ILeaderService } from '../Interfaces/leaderboard';

class LeaderBoardController {
  private _service: ILeaderService;

  constructor(service: ILeaderService) {
    this._service = service;
  }

  getHomeInfo = async (_req: Request, res: Response) => {
    const leaderboard = await this._service.getLeaderboard('homeTeam');
    return res.status(200).json(leaderboard);
  };

  getAwayInfo = async (_req: Request, res: Response) => {
    const leaderboard = await this._service.getLeaderboard('awayTeam');
    return res.status(200).json(leaderboard);
  };

  getFullLeaderboard = async (_req: Request, res: Response) => {
    const fullLeaderBoard = await this._service.getFullLeaderBoard();
    return res.status(200).json(fullLeaderBoard);
  };
}

export default LeaderBoardController;
