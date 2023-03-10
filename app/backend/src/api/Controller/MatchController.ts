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

  /* findByProgress = async (req: Request, res: Response) => {
    const { q } = req.query;
    const { type, message } = await this.service.filteredByProgress(q === 'true');
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };
  */

  getAll = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    // if (q) return this.findByProgress(req, res);

    // console.log(q);

    const { type, message } = inProgress !== undefined
      ? await this.service.filteredByProgress(inProgress === 'true') : await this.service.getAll();
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };
}

export default MatchController;
