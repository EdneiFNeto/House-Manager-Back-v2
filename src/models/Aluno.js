import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      matricula: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      sequelize,
    });

    return this;
  }
}
