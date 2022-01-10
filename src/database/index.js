import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import TypeAccount from '../models/TypeAccount';
import AccountUser from '../models/AccountUser';
import User from '../models/User';

const models = [Aluno, User, TypeAccount, AccountUser];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
