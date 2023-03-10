import IServiceResponse from './IServiceResponse';

export default interface IMatchService {
  getAll(): Promise<IServiceResponse>
}
