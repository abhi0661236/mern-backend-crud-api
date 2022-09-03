// app.js

import express from 'express';
import connectDB from './config/db.js';
import * as dotenv from 'dotenv';
import BookRoutes from './routes/BookRoutes.js';
import bodyParser from 'body-parser';








dotenv.config();
const app = express();

const port = process.env.PORT;
const password = process.env.DB_PWD;
const username = process.env.DB_UNAME;


// connect database pass username and password.
connectDB(username, password);



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use('/', BookRoutes);



app.listen(port, () => console.log(`Server running on port ${port}`));