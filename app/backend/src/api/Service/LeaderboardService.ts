import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
// import { ILeaderboard, ILeaderService } from '../Interfaces/leaderboard';
import HomeInfo from '../Utils/HomeInfo';
import IMatchTeam from '../Interfaces/leaderboard/IMatchTeam';
import { ILeaderboard } from '../Interfaces/leaderboard';

class LeaderboardService {
  protected matchModel: ModelStatic<Match> = Match;
  protected teamModel: ModelStatic<Team> = Team;

  getHomeInfo = async (): Promise<ILeaderboard[]> => {
    const teams = await this.teamModel.findAll({
      attributes: { exclude: ['id'] },
      include: {
        model: Match,
        as: 'homeTeam',
        attributes: { exclude: ['id', 'homeTeamId', 'awayTeamId', 'inProgress'] },
        where: { inProgress: false },
      },
    });
    const leaderboard = teams.map((e) => new HomeInfo(e as unknown as IMatchTeam));

    return leaderboard;
  };
}

export default LeaderboardService;
