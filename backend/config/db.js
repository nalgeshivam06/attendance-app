
const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/attendanceDB', {
// mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
