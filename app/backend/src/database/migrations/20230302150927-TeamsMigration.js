'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teams', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        teamName: {
          allowNull: false,
          type: Sequelize.STRING,
          field: 'team_name',
        },
    });
  },

  down: async (queryInterface, _) => {
    await queryInterface.dropTable('teams');
  }
};
