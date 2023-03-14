import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Match from './MatchModel';

class Team extends Model {
  declare readonly id: number;
  declare teamName: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  teamName: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'teams',
});

Team.hasMany(Match, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Team.hasMany(Match, { foreignKey: 'awayTeamId', as: 'awayTeam' });
Match.belongsTo(Team, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Match.belongsTo(Team, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Team;
