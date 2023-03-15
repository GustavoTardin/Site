import AwayInfo from '../../api/Utils/AwayInfo';
import FullInfo from '../../api/Utils/FullInfo';
import { IMatchTeamHome } from '../../api/Interfaces/leaderboard';
import orderLeaderBoard from '../../api/Utils/orderLeaderboard';
import HomeInfo from '../../api/Utils/HomeInfo';

const homeTeamResponse = [
    { teamName: 'Vasco', homeTeam: [{ homeTeamGoals: 1, awayTeamGoals: 0 }] },
    { teamName: 'Palmeiras', homeTeam: [{ homeTeamGoals: 1, awayTeamGoals: 0 }] },
    { teamName: 'Flamengo', homeTeam: [{ homeTeamGoals: 1, awayTeamGoals: 0 }] },
    { teamName: 'Corinthias', homeTeam: [{ homeTeamGoals: 0, awayTeamGoals: 1 }] },
    { teamName: 'Santos', homeTeam: [{ homeTeamGoals: 0, awayTeamGoals: 1 }] },
    { teamName: 'Fluminense', homeTeam: [{ homeTeamGoals: 0, awayTeamGoals: 1 }] }
] as IMatchTeamHome[];

const awayTeamResponse = [
    { teamName: 'Vasco', awayTeam: [{ awayTeamGoals: 1, homeTeamGoals: 0 }] },
    { teamName: 'Palmeiras', awayTeam: [{ awayTeamGoals: 1, homeTeamGoals: 0 }] },
    { teamName: 'Flamengo', awayTeam: [{ awayTeamGoals: 1, homeTeamGoals: 0 }] },
    { teamName: 'Corinthias', awayTeam: [{ awayTeamGoals: 0, homeTeamGoals: 1 }] },
    { teamName: 'Santos', awayTeam: [{ awayTeamGoals: 0, homeTeamGoals: 1 }] },
    { teamName: 'Fluminense', awayTeam: [{ awayTeamGoals: 0, homeTeamGoals: 1 }] },
]

const homeInfo = homeTeamResponse.map((h) => new HomeInfo(h));
const awayInfo = awayTeamResponse.map((a) => new AwayInfo(a));

const homeOrganized = orderLeaderBoard(homeInfo);
const awayOrganized = orderLeaderBoard(awayInfo);

const { fullLeaderBoard } = new FullInfo(homeOrganized, awayOrganized);

const fullOrganized = orderLeaderBoard(fullLeaderBoard);

const homeLeaderboard = [
    {
        efficiency: "100.00",
        goalsBalance: 1,
        goalsFavor: 1,
        goalsOwn: 0,
        name: 'Vasco',
        totalDraws: 0,
        totalGames: 1,
        totalLosses: 0,
        totalPoints: 3,
        totalVictories: 1,
         },
         {
             efficiency: "100.00",
             goalsBalance: 1,
             goalsFavor: 1,
             goalsOwn: 0,
             name: 'Palmeiras',
             totalDraws: 0,
             totalGames: 1,
             totalLosses: 0,
             totalPoints: 3,
             totalVictories: 1,
         },
         {
             efficiency: "100.00",
             goalsBalance: 1,
             goalsFavor: 1,
             goalsOwn: 0,
             name: 'Flamengo',
             totalDraws: 0,
             totalGames: 1,
             totalLosses: 0,
             totalPoints: 3,
             totalVictories: 1,
         },
         {
             efficiency: "0.00",
             goalsBalance: - 1,
             goalsFavor: 0,
             goalsOwn: 1,
             name: 'Corinthias',
             totalDraws: 0,
             totalGames: 1,
             totalLosses: 1,
             totalPoints: 0,
             totalVictories: 0,
         },
    {
        efficiency: "0.00",
        goalsBalance: - 1,
        goalsFavor: 0,
        goalsOwn: 1,
        name: 'Santos',
        totalDraws: 0,
        totalGames: 1,
        totalLosses: 1,
        totalPoints: 0,
        totalVictories: 0,
         },
    {
        efficiency: "0.00",
        goalsBalance: - 1,
        goalsFavor: 0,
        goalsOwn: 1,
        name: 'Fluminense',
        totalDraws: 0,
        totalGames: 1,
        totalLosses: 1,
        totalPoints: 0,
        totalVictories: 0,
         }
]

export { homeTeamResponse, awayTeamResponse,homeInfo, homeOrganized, awayOrganized, fullOrganized, homeLeaderboard };