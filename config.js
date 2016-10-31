module.exports = {
  app: {
    secret: process.env.APP_SECRET,
    port: process.env.APP_PORT || 9000
  },
  db: {
    client: process.env.DB_CLIENT || 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
    migrations: {
      tableName: process.env.DB_MIGRATION_TABLE || 'migrations'
    }
  }
}
