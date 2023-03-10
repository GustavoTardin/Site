import 'dotenv';
import * as jwt from 'jsonwebtoken';
import IJWT from '../../Interfaces/Jwt/IJWT';
import IUser from '../../Interfaces/users/IUser';
// import { JewPayload } from 'jwt-decode';

class Jwt implements IJWT {
  private _mySecret: string = process.env.JWT_SECRET || 'jwt_secret';
  private _jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  generateToken = (payload: IUser) => {
    const token = jwt.sign(payload, this._mySecret, this._jwtConfig);
    return token;
  };

  validateToken = (token: string): IUser => {
    const decryptedData = jwt.verify(token, this._mySecret) as IUser;
    return decryptedData;
  };
}

export default Jwt;
