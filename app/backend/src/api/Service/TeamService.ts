import { ModelStatic } from 'sequelize';
import Team from '../../database/models/TeamModel';
import { ITeamService } from '../Interfaces/teams';

class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  async getAll(): Promise<Team[]> {
    const teams = await this.model.findAll();
    return teams;
  }

  async getById(id: number): Promise<Team | null> {
    const teamSelected = await this.model.findByPk(id);
    return teamSelected;
  }
}

export default TeamService;
