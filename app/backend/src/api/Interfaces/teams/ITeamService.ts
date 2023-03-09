import IServiceResponse from './IServiceResponse';
import ITeam from './ITeam';

export default interface ITeamService {
  getAll(): Promise<ITeam[]>
  getById(id: number): Promise<IServiceResponse>
}
