import IUser from '../users/IUser';

export default interface IJWT {
  generateToken(payload: IUser): string,
  validateToken(token: string): boolean | { id: number }
}
