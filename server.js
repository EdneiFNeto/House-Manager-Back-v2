import app from './app';

const port = 3001;
app.listen(port, '192.168.1.108', () => {
  console.log('Run port', port);
});
