import TypeAccount from '../models/TypeAccount';

class TypeAccountController {
  async store(request, response) {
    try {
      const typeAccount = await TypeAccount.create(request.body);
      return response.status(201).json(typeAccount);
    } catch (e) {
      return response.status(500).json({ error: `${e.errors.map((error) => error.message)}` });
    }
  }

  async index(request, response) {
    return response.status(200).json(await TypeAccount.findAll());
  }
}

export default new TypeAccountController();
