'use strict';

let up = async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    passWord: {
      type: Sequelize.STRING
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    phoneNumber: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    positionID: {
      type: Sequelize.STRING
    },
    roleID: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.BLOB('long'),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
let down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Users');
}
module.exports = {
  up: up, down: down
}

