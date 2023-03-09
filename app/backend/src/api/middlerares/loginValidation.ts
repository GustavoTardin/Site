import { NextFunction, Request, Response } from 'express';

class loginValidation {
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
}

export default loginValidation;
