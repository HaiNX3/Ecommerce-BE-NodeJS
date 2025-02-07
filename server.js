const app = require('./src/app');

const PORT = process.env.PORT || 3056;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log('App terminated');
//   });
// });
