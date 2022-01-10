import jwt from 'jsonwebtoken';

export default (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: 'Not authorization' });
  }

  const [, token] = authorization.split(' ');

  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;

    request.id = id;
    request.email = email;
    return next();
  } catch (e) {
    return response.status(500).json({ error: e.erros });
  }
};
