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
    const response = await this.service.getById(Number(id));
    if (!response) return res.status(404).json({ message: 'This team does not exist' });
    return res.status(200).json(response);
  };
}

export default TeamsController;
