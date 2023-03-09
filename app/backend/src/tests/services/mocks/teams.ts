import Teams from "../../../database/models/TeamsModel";

const team: Teams = { id: 1, teamName: 'Vasco' } as Teams;

const teams: Teams[] = [
    team,
    { id: 2, teamName: 'Real Madrid' },
    { id: 3, teamName: 'Liverpool' }
] as Teams[];

export { team, teams };