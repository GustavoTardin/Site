import { ModelStatic } from 'sequelize';
import User from '../../database/models/UsersModel';
import ILoginService from '../Interfaces/users/ILoginService';
import IServiceResponse from '../Interfaces/users/IServiceResponse';

class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;

  checkLogin(email: string, password: string): Promise<IServiceResponse> {
    throw new Error('Method not implemented.');
  }
}

export default LoginService;
