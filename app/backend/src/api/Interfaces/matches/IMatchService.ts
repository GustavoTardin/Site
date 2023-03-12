import IServiceResponse from './IServiceResponse';

export default interface IMatchService {
  getAll(): Promise<IServiceResponse>
  filteredByProgress(boolean: boolean): Promise<IServiceResponse>
  finishMatch(id: number): Promise<IServiceResponse>
  updateScore(homeTeamGoals: number, awayTeamGoals: number, id: number): Promise<IServiceResponse>
}
