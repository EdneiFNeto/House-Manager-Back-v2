import app from './app';

const port = process.env.PORT || process.env.APP_PORT;
const URL = process.env.APP_URL;

app.listen(port, URL, () => {
  console.info('Run port', port);
});
