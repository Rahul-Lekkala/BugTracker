const mongoose = require('mongoose');

mongoose
//.connect('mongodb://localhost:27017/bug')
.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Mongo connected');
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });
