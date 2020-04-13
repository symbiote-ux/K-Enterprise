const app = require('./lib/app');

const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Started Listening on : ', port));
