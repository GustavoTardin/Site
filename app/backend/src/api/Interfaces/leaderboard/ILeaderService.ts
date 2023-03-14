import ILeaderboard from './ILeaderboard';

export default interface ILeaderService {
  getLeaderboard(table: string): Promise<ILeaderboard[]>
}
