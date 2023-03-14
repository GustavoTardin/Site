export default interface IMatchTeamAway {
  teamName: string,
  awayTeam: { homeTeamGoals: number, awayTeamGoals: number }[]
}
