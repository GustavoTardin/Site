export default interface IMatchTeam {
  teamName: string,
  homeTeam: { homeTeamGoals: number, awayTeamGoals: number }[]
}
