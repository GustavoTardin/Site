import { NextFunction, Request, Response } from 'express';
import IJWT from '../Interfaces/Jwt/IJWT';
import Jwt from '../Utils/Jwt/Jwt';

class Validation {
  private _jwt: IJWT = new Jwt();
  public errorMessage = 'All fields must be filled';

  validateEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: this.errorMessage });
    next();
  };

  validatePassword = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: this.errorMessage });
    next();
  };

  validateToken = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    try {
      this._jwt.validateToken(authorization);
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  };

  validateScoreBody = (req: Request, res: Response, next: NextFunction) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;

    if (!homeTeamGoals || !awayTeamGoals) {
      return res.status(400).json({ message: this.errorMessage });
    }
    next();
  };
}

export default Validation;
