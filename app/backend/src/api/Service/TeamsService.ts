import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import { ITeam, ITeamService, IServiceResponse } from '../Interfaces/teams';

class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<ITeam[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async getById(id: number): Promise<IServiceResponse> {
    const teamSelected = await this.model.findByPk(id);
    if (!teamSelected) return { type: 404, message: 'This team does not exist' };
    return { type: null, message: teamSelected };
  }
}

export default TeamService;
