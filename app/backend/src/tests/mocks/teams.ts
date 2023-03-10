import Team from '../../database/models/TeamModel';

const team: Team = { id: 1, teamName: 'Vasco' } as Team;

const teams: Team[] = [
    team,
    { id: 2, teamName: 'Real Madrid' },
    { id: 3, teamName: 'Liverpool' }
] as Team[];

export { team, teams };