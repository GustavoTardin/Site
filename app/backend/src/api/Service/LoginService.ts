import { ModelStatic } from 'sequelize';
import bcrypt = require('bcryptjs');
import User from '../../database/models/UsersModel';
import ILoginService from '../Interfaces/users/ILoginService';
import IServiceResponse from '../Interfaces/users/IServiceResponse';
import Jwt from '../Utils/Jwt/Jwt';
import IJWT from '../Interfaces/Jwt/IJWT';
import loginSchema from '../Utils/Joi/loginSchema';
import IUser from '../Interfaces/users/IUser';

class LoginService implements ILoginService {
  protected model: ModelStatic<User> = User;
  public jwt: IJWT = new Jwt();
  public schema = loginSchema;

  validateBody(body: { email: string, password: string }) {
    const { error } = this.schema.validate(body);
    if (error) return false;
    return true;
  }

  checkLogin = async (email: string, password: string): Promise<IServiceResponse> => {
    const errorMessage = 'Invalid email or password';

    if (this.validateBody({ email, password })) {
      const user = await this.model.findOne({
        attributes: ['id', 'email', 'password'],
        where: { email },
      });

      if (!user) return { type: 401, message: errorMessage };

      const checkPassword = await bcrypt.compare(password, user.password);

      if (checkPassword) {
        const payload = { id: user.id, email: user.email };

        const token = this.jwt.generateToken(payload);
        return { type: null, message: token };
      }
      return { type: 401, message: errorMessage };
    }
    return { type: 401, message: errorMessage };
  };

  getRole = async (token: string): Promise<IServiceResponse> => {
    const decryptedData = this.jwt.validateToken(token) as IUser;
    const role = await this.model.findByPk(decryptedData.id, {
      attributes: ['role'],
    });
    if (role) return { type: null, message: role };
    return { type: 401, message: 'Token must be a valid token' };
  };
}

export default LoginService;
