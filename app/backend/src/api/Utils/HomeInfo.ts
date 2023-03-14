import { ILeaderInfo, IMatchTeamHome } from '../Interfaces/leaderboard';

class HomeInfo implements ILeaderInfo {
  name: string; // feito
  totalPoints = 0; // feito
  totalGames = 0; // feito
  totalVictories = 0; // feito
  totalDraws = 0; // feito
  totalLosses = 0; // feito
  goalsFavor = 0; // feito
  goalsOwn = 0; // feito
  goalsBalance: number;
  efficiency;

  constructor(team: IMatchTeamHome) {
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
      if (e.homeTeamGoals < e.awayTeamGoals) this.totalLosses += 1;
    });
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }
}

export default HomeInfo;
