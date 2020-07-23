const jwt = require('jsonwebtoken');

exports.authenticateToken = function(req, res, next){
  const authHeaders = req.headers['authorization'];
  const token = authHeaders && authHeaders.split(' ')[1];

  if( token === null ) return res.sendStatus(401);

  jwt.verify(token, 'secret', (err, user) => {
    if(err){
      return res.sendStatus(403)
    }
    req.user = user;
    next();
  })
}


exports.generateAccessToken = function(username){
  return jwt.sign(username, 'secret', { expiresIn: '5m' })
}
