import { ILeaderboard } from '../Interfaces/leaderboard';

class FullInfo {
  fullLeaderBoard: ILeaderboard[] = [];

  constructor(lHome: ILeaderboard[], lAway: ILeaderboard[]) {
    lHome.forEach((e) => {
      const awayScore = lAway.filter((l) => l.name === e.name);
      e.totalPoints += awayScore[0].totalPoints;
      e.totalGames += awayScore[0].totalGames;
      e.totalVictories += awayScore[0].totalVictories;
      e.totalDraws += awayScore[0].totalDraws;
      e.totalLosses += awayScore[0].totalLosses;
      e.goalsFavor += awayScore[0].goalsFavor;
      e.goalsOwn += awayScore[0].goalsOwn;
      e.goalsBalance += awayScore[0].goalsBalance;
      e.efficiency = ((e.totalPoints / (e.totalGames * 3)) * 100).toFixed(2);
      this.fullLeaderBoard.push(e);
    });
  }
}

export default FullInfo;
