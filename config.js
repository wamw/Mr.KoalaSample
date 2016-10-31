module.exports = {
  secret: 'xxxx',
  db: {
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
  }
}
