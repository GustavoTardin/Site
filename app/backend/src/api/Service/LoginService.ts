import { ModelStatic } from 'sequelize';
import bcrypt = require('bcryptjs');
import User from '../../database/models/UsersModel';
import ILoginService from '../Interfaces/users/ILoginService';
import IServiceResponse from '../Interfaces/users/IServiceResponse';
import Jwt from '../Jwt/Jwt';
import IJWT from '../Interfaces/Jwt/IJWT';

class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;
  public jwt: IJWT = new Jwt();

  checkLogin = async (email: string, password: string): Promise<IServiceResponse> => {
    const user = await this.model.findOne({
      attributes: ['id', 'email', 'password'],
      where: { email },
    });

    if (!user) return { type: 401, message: 'Invalid email or password' };

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const payload = { id: user.id, email: user.email };

      const token = this.jwt.generateToken(payload);
      return { type: null, message: token };
    }
    return { type: 401, message: 'Invalid email or password' };
  };
}

export default LoginService;
