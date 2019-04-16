var mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true}
);

const db = mongoose.connection;
//database connection event

db.once('connected', () => {
    console.log(`Connected to MongoDb ${db.name} at ${db.host}:${db.port}`);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
    // Recommended: send the information to sentry.io
    // or whatever crash reporting service you use
  })
