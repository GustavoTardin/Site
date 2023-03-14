import { ILeaderInfo, IMatchTeamAway } from '../Interfaces/leaderboard';

class AwayInfo implements ILeaderInfo {
  name: string; // feito
  totalPoints = 0; // feito
  totalGames = 0; // feito
  totalVictories = 0; // feito
  totalDraws = 0; // feito
  totalLosses = 0; // feito
  goalsFavor = 0; // feito
  goalsOwn = 0; // feito
  goalsBalance: number;
  efficiency: string;

  constructor(team: IMatchTeamAway) {
    this.name = team.teamName;
    this.totalGames = team.awayTeam.length;
    team.awayTeam.forEach((t) => {
      this.goalsFavor += t.awayTeamGoals;
      this.goalsOwn += t.homeTeamGoals;
      if (t.awayTeamGoals > t.homeTeamGoals) {
        this.totalVictories += 1;
        this.totalPoints += 3;
      }
      if (t.awayTeamGoals === t.homeTeamGoals) {
        this.totalDraws += 1;
        this.totalPoints += 1;
      }
      if (t.awayTeamGoals < t.homeTeamGoals) this.totalLosses += 1;
    });
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }
}

export default AwayInfo;
