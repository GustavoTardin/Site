import { NextFunction, Request, Response } from 'express';
import IJWT from '../Interfaces/Jwt/IJWT';
import Jwt from '../Utils/Jwt/Jwt';

class loginValidation {
  private _jwt: IJWT = new Jwt();

  validateEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'All fields must be filled' });
    next();
  };

  validatePassword = (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;

    if (!password) return res.status(400).json({ message: 'All fields must be filled' });
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
}

export default loginValidation;
