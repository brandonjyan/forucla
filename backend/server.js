import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import loginRoutes from './routes/login.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use('/posts', postRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
  res.send('FORUCLA IS UP AND RUNNING...');
});
const CONNECTION_URL = 'mongodb+srv://oongaboonga:ucla-forum@cluster0.6r2q2co.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.port || 4000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));
