import Sequelize, { Model } from 'sequelize';
import bcript from 'bcryptjs';

export default class User extends Model {
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
        validate: {
          len: {
            msg: 'Min 3 and Max 256 caracter',
            args: [3, 256],
          },
        },
      },
      password_has: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 6],
            msg: 'Min 3 or 6 character',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Exists email',
        },
        validate: {
          isEmail: { msg: 'Invalid email' },
        },
      },
    }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password_has = await bcript.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcript.compare(password, this.password_has);
  }
}
