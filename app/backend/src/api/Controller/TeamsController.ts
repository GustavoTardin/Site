import { Request, Response } from 'express';
import { ITeamService } from '../Interfaces/teams';

class TeamsController {
  private _service: ITeamService;

  constructor(teamService: ITeamService) {
    this._service = teamService;
  }

  get service(): ITeamService {
    return this._service;
  }

  getAll = async (_req: Request, res: Response) => {
    const teams = await this.service.getAll();
    return res.status(200).json(teams);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { type, message } = await this.service.getById(Number(id));
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };
}

export default TeamsController;
