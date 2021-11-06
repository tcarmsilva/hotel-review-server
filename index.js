import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json({ limit: "30mb", extended:true }));
app.use(express.urlencoded({ limit:"30mb", extended:true }));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://tcarmsilva:123Novasenha@mongotestes.uyh5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL)
  .then(()=>{console.log(`Server Running on Port: http://localhost:${PORT}`)})
  .catch((error) => console.log(`${error} did not connect`));
