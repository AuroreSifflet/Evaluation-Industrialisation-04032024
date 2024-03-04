import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const port = 8070;
const host = '127.0.0.1';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(dirname, 'public')));
app.use(
  '/favicon.ico',
  express.static(path.join(dirname, 'public', 'images', 'favicon.png'))
);
app.use('/script', express.static(path.join(dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(dirname) }, (err) => {
    if (err) throw new Error(err);
  });
});

app.post('/comment', (req, res) => {
  const comment = req.body.message.replace('<script>', ' ');
  res.send(comment);
});

app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}`);
});
