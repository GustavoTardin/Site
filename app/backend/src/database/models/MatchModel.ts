import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

class Match extends Model {
  declare readonly id: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
  declare homeTeamId: number;
  declare awayTeamId: number;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  homeTeamId: {
    allowNull: false,
    type: INTEGER,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  homeTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamId: {
    allowNull: false,
    type: INTEGER,
  },
  awayTeamGoals: {
    allowNull: false,
    type: INTEGER,
  },
  inProgress: {
    allowNull: false,
    type: BOOLEAN,
  },
}, {
  sequelize: db,
  underscored: true,
  timestamps: false,
  modelName: 'matches',
});

export default Match;
