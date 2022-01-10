import User from '../models/User';

class UserController {
  async index(request, response) {
    const users = await User.findAll();
    response.status(201).json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const users = await User.findByPk(id);
    response.status(201).json(users);
  }

  async store(request, response) {
    const { name, password, email } = request.body;

    try {
      const users = await User.create({
        name,
        password,
        email,
      });
      response.status(201).json(users);
    } catch (e) {
      response.status(400).json({ error: e.errors.map((err) => err.message) });
    }
  }

  async update(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      response.status(400).json({ error: 'Not existis users' });
    }

    const users = await user.update(request.body);
    response.status(201).json(users);
  }

  async delete(request, response) {
    const { id } = request.params;

    const user = await User.findByPk(id);

    if (!user) {
      response.status(400).json({ error: 'Not existis users' });
    }

    await user.destroy();
    response.status(201).json(user);
  }
}

export default new UserController();
