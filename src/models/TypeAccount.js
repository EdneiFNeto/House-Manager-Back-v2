import Sequelize, { Model } from 'sequelize';

export default class TypeAccount extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
    }, {
      tableName: 'type_accounts',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      sequelize,
    });

    return this;
  }
}
