import { Request, Response } from 'express';
import { ILeaderService } from '../Interfaces/leaderboard';

class LeaderBoardController {
  private _service: ILeaderService;

  constructor(service: ILeaderService) {
    this._service = service;
  }

  getHomeInfo = async (_req: Request, res: Response) => {
    const teams = await this._service.getHomeInfo();
    return res.status(200).json(teams);
  };
}

export default LeaderBoardController;
