import IServiceResponse from './IServiceResponse';

export default interface ILoginService {
  checkLogin(email: string, password: string): Promise<IServiceResponse>
}
