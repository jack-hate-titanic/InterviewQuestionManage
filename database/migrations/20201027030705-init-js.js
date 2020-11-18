"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING, TEXT } = Sequelize;
    await queryInterface.createTable("js", {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: STRING,
        allowNull: false,
      },
      analysis: {
        type: TEXT,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("js");
  },
};
