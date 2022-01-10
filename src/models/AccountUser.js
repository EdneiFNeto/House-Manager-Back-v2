import Sequelize, { Model } from 'sequelize';

export default class AccountUser extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      discount: Sequelize.DECIMAL(10, 2),
      user_id: Sequelize.INTEGER.UNSIGNED,
      type_id: Sequelize.INTEGER.UNSIGNED,
      value: Sequelize.DECIMAL,
      status: Sequelize.BOOLEAN,
      register_date: Sequelize.DATE,
    }, {
      tableName: 'accounts_users',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TypeAccount, {
      as: 'type_account',
      foreignKey: 'type_id',
    });

    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
  }
}
