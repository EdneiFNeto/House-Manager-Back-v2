import app from './app';

const port = process.env.PORT || 3000;
const URL = process.env.APP_URL;

app.listen(port, URL, () => {
  console.info('Run port', port);
});
