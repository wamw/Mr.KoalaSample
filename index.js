const path = require('path'),
      koala = require('mr-koala'),
      Knex = require('knex'),
      Model = require('objection').Model,
      config = require('./config.js'),
      ModelUser = require('./models/user.js');

      console.log(123);
const knex = Knex(config.db);
Model.knex(knex);


const mr = koala(
  path.dirname(__filename) + '/api.raml',
  {
    resources: path.dirname(__filename) + '/resources',
    secretKey: config.app.secret
  }
);


koala.auth.handlers.basic = function(username, password, cb) {
  if (username === 'hoge' && password === 'fuga') {
    return cb(null, {name: 'hoge'});
  }
  return cb(null, false);
}
koala.auth.handlers.digest = function(username, cb) {
  if (username === 'hoge') {
    return cb(null, {name: 'hoge'}, 'fuga');
  }
  return cb(null, false);
};
koala.auth.handlers.jwt = function(jwt_payload, cb) {
  if (jwt_payload.id) {
    return cb(null, {id: jwt_payload.id});
  }
  return cb(null, false);
};


mr.listen(config.app.port);
