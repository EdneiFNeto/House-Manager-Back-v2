import Aluno from '../models/Aluno';

class HomeController {
  async index(request, response) {
    const alunos = await Aluno.findAll();
    response.status(201).json(alunos);
  }

  async store(request, response) {
    const { name, matricula, email } = request.body;
    const novoAluno = await Aluno.create({
      name,
      matricula,
      email,
    });

    response.status(201).json({ message: novoAluno });
  }
}

export default new HomeController();
