require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./config/db')();
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();

// Routers
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const meetingRouter = require('./routes/meeting');
const classroomRouter = require('./routes/classroom');

// passport config
require('./config/passport')(passport);

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  }),
);

/*
 **********************************
 * Middlewares
 ***********************************
 */
app.use(passport.initialize());
app.use(passport.session());

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// To prevent cors error
app.use(cors());

/*
 **********************************
 * Routes
 ***********************************
 */
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/classroom', classroomRouter);
app.use('/post', postRouter);
app.use('/meeting', meetingRouter);

// 404
app.use((req, res, next, error) => {
  res.status(404).json({
    error: true,
    details: error,
  });
});

app.use((error, req, res, next) => {
  res.status(error.code || 500).json({
    error: true,
    details: error,
  });
});

//listen
app.listen(8000, () => {
  console.log('Server up and running at port 8000...');
});
