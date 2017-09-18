// App modules
const config = require('./config/config');

// NPM Packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
// const passport = require('passport');
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

// Init express
const app = express();
// Init Session -> Redis
// app.use(session({
//   store: new RedisStore({
//     url: config.redisStore.url,
//   }),
//   secret: config.redisStore.secret,
//   resave: false,
//   saveUninitialized: false,
// }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

// Init routes
require('./routes')(app);

// Sync DB and start server
sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 8081);
    console.log(`Server started on: ${config.port}`);
  });

