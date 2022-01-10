const crypto = require('crypto');
const base64url = require('base64url');

const gerarSecret = () => {
  const secret = crypto.randomBytes(24).toString('hex');
  return base64url(secret);
};

module.exports = console.log(gerarSecret());
