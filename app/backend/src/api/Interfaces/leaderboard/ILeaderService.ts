import ILeaderboard from './ILeaderboard';

export default interface ILeaderService {
  getHomeInfo(): Promise<ILeaderboard[]>
}
