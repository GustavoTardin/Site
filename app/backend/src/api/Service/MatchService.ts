import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchModel';
import Team from '../../database/models/TeamModel';
import { IMatchService, IServiceResponse, INewMatchBody } from '../Interfaces/matches';

class MatchService implements IMatchService {
  protected model: ModelStatic<Match> = Match;
  protected teamModel: ModelStatic<Team> = Team;

  getAll = async (): Promise<IServiceResponse> => {
    const response = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return { type: null, message: response };
  };

  private getById = async (id: number): Promise<Match | null> => {
    const match = await this.model.findByPk(id);
    return match;
  };

  filteredByProgress = async (boolean: boolean): Promise<IServiceResponse> => {
    const response = await this.model.findAll({
      where: { inProgress: boolean },
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return { type: null, message: response };
  };

  finishMatch = async (id: number): Promise<IServiceResponse> => {
    const match = await this.getById(id);
    if (!match) return { type: 400, message: 'There is not a match with this id' };
    await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return { type: null, message: 'Finished' };
  };

  updateScore = async (homeTeamGoals: number, awayTeamGoals: number, id: number)
  : Promise<IServiceResponse> => {
    const match = await this.getById(id);
    if (!match) return { type: 422, message: 'There is not a match with this id' };
    if (!match.inProgress) {
      return { type: 400, message: 'You can not change the result of a finished match' };
    }
    await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    return { type: null, message: 'The score was changed successfully' };
  };

  insertMatch = async (
    { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals }: INewMatchBody,
  ): Promise<IServiceResponse> => {
    const ids = [homeTeamId, awayTeamId];
    const teams = await Promise.all(ids.map((e) => this.teamModel.findByPk(e)));
    if (teams.some((e) => !e)) {
      return { type: 404, message: 'There is no team with such id!' };
    }
    const newMatch = await this.model.create(
      { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals, inProgress: false },
    );
    return { type: null, message: newMatch };
  };
}

export default MatchService;
