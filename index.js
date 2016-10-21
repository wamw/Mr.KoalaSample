const path = require('path'),
      koala = require('mr-koala'),
      mysql = require('mysql-co');

const mr = koala(
  'http://spec.wamw.jp/-KSkQFlChRMrSKoozi2N/raml',
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

// const config = {
//   modelPath: path.join(__dirname, 'models'),
//   db: 'bike-api',
//   username: 'root',
//   password: 'hogehoge',
//   dialect: 'mysql',
//   host: '127.0.0.1',
//   port: 3306,
//   pool: {
//     maxConnections: 10,
//     minConnections: 0,
//     maxIdleTime: 30000
//   }
// };
// const orm = koaOrm(config);

// mr.use(orm.middleware);


mr.listen(9001);
