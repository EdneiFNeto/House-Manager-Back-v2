class TestController {
  async index(request, response) {
    response.status(201).json({ message: 'Success teste API' });
  }
}

export default new TestController();
