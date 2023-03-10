import { Request, Response } from 'express';
import ILoginService from '../Interfaces/users/ILoginService';

class LoginController {
  private _service: ILoginService;

  constructor(service: ILoginService) {
    this._service = service;
  }

  checkLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { type, message } = await this._service.checkLogin(email, password);
    if (type) return res.status(type).json({ message });
    return res.status(200).json({ token: message });
  };

  getRole = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { type, message } = await this._service.getRole(authorization as string);
    if (type) return res.status(type).json({ message });
    return res.status(200).json(message);
  };
}

export default LoginController;
