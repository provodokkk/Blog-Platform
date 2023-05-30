module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'verve',
    user: process.env.DB_USER || 'provodok',
    password: process.env.DB_PASS || 'verve',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './verve.sqlite'
    }
  }
}
