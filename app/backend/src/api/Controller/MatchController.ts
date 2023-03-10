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

  getAll = async (_req: Request, res: Response) => {
    const { type, message } = await this.service.getAll();
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };
}

export default MatchController;
