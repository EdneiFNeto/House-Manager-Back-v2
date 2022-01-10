import AccountUser from '../models/AccountUser';
import TypeAccount from '../models/TypeAccount';
import User from '../models/User';

class AccountUserController {
  async store(request, response) {
    try {
      const accountUser = await AccountUser.create(request.body);
      return response.status(201).json(accountUser);
    } catch (e) {
      return response.status(500).json({ error: `${e}` });
    }
  }

  async index(request, response) {
    return response.status(200).json(await AccountUser.findAll());
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);
    if (!user) {
      return response.status(400).json({ error: 'Not existis users' });
    }

    const accounts = await AccountUser.findAll({
      where: { user_id: id },
      include: [
        {
          model: TypeAccount,
          as: 'type_account',
          attributes: ['id', 'name'],
        },
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        },
      ],
    });
    return response.status(200).json(accounts);
  }

  async delete(request, response) {
    const { id } = request.params;

    const accounts = await AccountUser.findByPk(id);
    if (!accounts) {
      return response.status(400).json({ error: 'Not existis accounts' });
    }

    await accounts.destroy();
    return response.status(200).json({ message: 'Delete is Success' });
  }

  async update(request, response) {
    const { id } = request.params;

    const accounts = await AccountUser.findByPk(id);
    if (!accounts) {
      return response.status(400).json({ error: 'Not existis accounts' });
    }

    await accounts.update(request.body);
    return response.status(204).json({ message: 'Update is Success' });
  }
}

export default new AccountUserController();
