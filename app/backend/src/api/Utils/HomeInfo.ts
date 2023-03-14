import { IHomeInfo, IMatchTeam } from '../Interfaces/leaderboard';

class HomeInfo implements IHomeInfo {
  name: string; // feito
  totalPoints = 0; // feito
  totalGames = 0; // feito
  totalVictories = 0; // feito
  totalDraws = 0; // feito
  totalLosses = 0; // feito
  goalsFavor = 0; // feito
  goalsOwn = 0; // feito

  constructor(team: IMatchTeam) {
    this.name = team.teamName;
    this.totalGames = team.homeTeam.length;
    team.homeTeam.forEach((e) => {
      this.goalsFavor += e.homeTeamGoals;
      this.goalsOwn += e.awayTeamGoals;
      if (e.homeTeamGoals > e.awayTeamGoals) {
        this.totalVictories += 1;
        this.totalPoints += 3;
      }
      if (e.homeTeamGoals === e.awayTeamGoals) {
        this.totalDraws += 1;
        this.totalPoints += 1;
      }
      if (e.homeTeamGoals < e.awayTeamGoals) {
        this.totalLosses += 1;
      }
    });
  }
}

export default HomeInfo;
