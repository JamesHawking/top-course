module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'topcourse',
    user: process.env.USER || 'topcourse',
    password: process.env.DB_PASS || 'topcourse',
    options: {
      dialect: 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: '.topcourse.sqlite',
    },
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
