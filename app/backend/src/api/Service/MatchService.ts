import { ModelStatic } from 'sequelize';
import Match from '../../database/models/MatchModel';
import Team from '../../database/models/TeamModel';
import { IMatchService, IServiceResponse } from '../Interfaces/matches';

class MatchService implements IMatchService {
  protected model: ModelStatic<Match> = Match;

  getAll = async (): Promise<IServiceResponse> => {
    const response = await this.model.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return { type: null, message: response };
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
}

export default MatchService;
