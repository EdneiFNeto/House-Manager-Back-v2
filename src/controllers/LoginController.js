import jwt from 'jsonwebtoken';
import User from '../models/User';

class LoginController {
  async store(request, response) {
    const { email } = request.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return response.status(400).json({ error: 'Not exists user!' });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRED,
    });

    return response.status(200).json({ token, id, email });
  }
}

export default new LoginController();
