import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import Match from '../../database/models/MatchModel';
import HomeInfo from '../Utils/HomeInfo';
import {
  ILeaderboard,
  ILeaderService,
  IMatchTeamAway,
  IMatchTeamHome,
} from '../Interfaces/leaderboard';
import orderLeaderBoard from '../Utils/orderLeaderboard';
import AwayInfo from '../Utils/AwayInfo';
import FullInfo from '../Utils/Jwt/FullInfo';

class LeaderboardService implements ILeaderService {
  protected matchModel: ModelStatic<Match> = Match;
  protected teamModel: ModelStatic<Team> = Team;

  getLeaderboard = async (table: string): Promise<ILeaderboard[]> => {
    const teams = await this.teamModel.findAll({
      attributes: { exclude: ['id'] },
      include: {
        model: Match,
        as: table,
        attributes: { exclude: ['id', 'homeTeamId', 'awayTeamId', 'inProgress'] },
        where: { inProgress: false },
      },
    });

    const leaderboard: ILeaderboard[] = table === 'homeTeam'
      ? teams.map((h) => new HomeInfo(h as unknown as IMatchTeamHome))
      : teams.map((a) => new AwayInfo(a as unknown as IMatchTeamAway));

    return orderLeaderBoard(leaderboard);
  };

  getFullLeaderBoard = async (): Promise<ILeaderboard[]> => {
    const home = await this.getLeaderboard('homeTeam');
    const away = await this.getLeaderboard('awayTeam');
    const { fullLeaderBoard } = new FullInfo(home, away);
    return orderLeaderBoard(fullLeaderBoard);
  };
}

export default LeaderboardService;
