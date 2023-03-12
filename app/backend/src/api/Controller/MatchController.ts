import { Request, Response } from 'express';
import { IMatchService } from '../Interfaces/matches';

class MatchController {
  private _service: IMatchService;

  constructor(service: IMatchService) {
    this._service = service;
  }

  public get service(): IMatchService {
    return this._service;
  }

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    const { type, message } = inProgress
      ? await this.service.filteredByProgress(inProgress === 'true') : await this.service.getAll();
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };

  finishMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { type, message } = await this.service.finishMatch(Number(id));
    if (type) return res.status(type).json({ message });
    return res.status(200).json({ message });
  };

  updateScore = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { type, message } = await
    this.service.updateScore(homeTeamGoals, awayTeamGoals, Number(id));
    if (type) return res.status(type).json({ message });
    return res.status(200).json({ message });
  };
}

export default MatchController;
