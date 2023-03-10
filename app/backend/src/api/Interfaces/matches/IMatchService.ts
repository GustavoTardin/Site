import IServiceResponse from './IServiceResponse';

export default interface IMatchService {
  getAll(): Promise<IServiceResponse>
  filteredByProgress(boolean: boolean): Promise<IServiceResponse>
}
