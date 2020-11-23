import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb://localhost:27017/socketio_chat?readPreference=primary&appname=Socket.io%20Chat&ssl=false',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Mongoose connection established'))
  .catch((err) =>
    console.log(`An error occurred while connection to MongoDB: ${err}`),
  );
