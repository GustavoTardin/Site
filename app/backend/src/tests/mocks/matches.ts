import Match from "../../database/models/MatchModel";

const matches = [
    {
        id: 1,
        homeTeamId: 16,
        homeTeamGoals: 1,
        awayTeamId: 8,
        awayTeamGoals: 1,
        inProgress: false,
        homeTeam: {
            teamName: 'São Paulo'
        },
        awayTeam: {
            teamName: 'Grêmio'
        }
    },
    {
        id: 2,
        homeTeamId: 15,
        homeTeamGoals: 1,
        awayTeamId: 9,
        awayTeamGoals: 5,
        inProgress: false,
        homeTeam: {
            teamName: 'Flamengo'
        },
        awayTeam: {
            teamName: 'Vasco'
        }
    },
    {
        id: 3,
        homeTeamId: 1,
        homeTeamGoals: 2,
        awayTeamId: 10,
        awayTeamGoals: 0,
        inProgress: false,
        homeTeam: {
            teamName: 'Fluminense'
        },
        awayTeam: {
            teamName: 'Coritiba'
        }
    },
] as unknown as Match[];

const newMatch = {
    homeTeamId: 12,
    awayTeamId: 4,
    homeTeamGoals: 3,
    awayTeamGoals: 2
} as Match

const bodyResponse = {
    homeTeamId: 12,
    homeTeamGoals: 3,
    awayTeamId: 4,
    awayTeamGoals: 2,
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2Nzg0MDMwMTYsImV4cCI6MTY3OTAwNzgxNn0.W9IqGV3GBq66fLrDa9WOw_o8qrz5GtUTvnxIgpd9CbE'

export { matches, newMatch, bodyResponse, token };
