import { ILeaderboard } from '../Interfaces/leaderboard';

const orderLeaderBoard = (board: ILeaderboard[]) => {
  board.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      if (a.totalVictories === b.totalVictories) {
        if (a.goalsBalance === b.goalsBalance) {
          if (a.goalsFavor === b.goalsFavor) {
            return a.goalsOwn - b.goalsOwn;
          }
          return b.goalsFavor - a.goalsFavor;
        }
        return b.goalsBalance - a.goalsBalance;
      }
      return b.totalVictories - a.totalVictories;
    }
    return b.totalPoints - a.totalPoints;
  });
  return board;
};

export default orderLeaderBoard;
