const path = require('path'),
      koala = require('mr-koala'),
      Knex = require('knex'),
      Model = require('objection').Model,
      conf = require('./knexfile.js');
      ModelUser = require('./models/user.js');


const knex = Knex(conf.development);
Model.knex(knex);


const mr = koala(
  'http://spec.wamw.jp/-KUapDjNDbpa5mw6GgcC/raml/1.0',
  {resources: path.dirname(__filename) + '/resources'}
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
  if (jwt_payload.name === 'hoge') {
    return cb(null, {name: 'hoge'});
  }
  return cb(null, false);
};


mr.listen(9001);
