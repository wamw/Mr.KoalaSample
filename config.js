const path = require('path');

module.exports = {
  app: {
    secret: process.env.APP_SECRET,
    port: process.env.APP_PORT || 9000,
    path: {
      raml: path.dirname(__filename) + '/api.raml',
      resources: path.dirname(__filename) + '/resources'
    }
  },
  db: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      tableName: 'migrations'
    }
  }
}
