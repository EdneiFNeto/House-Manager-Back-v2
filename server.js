import app from './app';

const port = process.env.APP_PORT || 3000;

app.listen(port, '192.168.1.108', () => {
  console.info('Run port', port);
});
