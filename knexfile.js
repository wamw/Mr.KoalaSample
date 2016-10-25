// Update with your config settings.


class Config{
  constructor(config) {
    this.config = config;
  }

  get development() {
    return this.config;
  }

  get production() {
    return this.config;
  }

  get test() {
    return this.config;
  }
}


module.exports = new Config({
  client: 'mysql',
  connection: {
    host: 'db',
    user: 'root',
    password: 'hogehoge',
    database: 'bike_api'
  },
  migrations: {
    tableName: 'knex_migrations'
  }
});
