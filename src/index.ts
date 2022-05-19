import express, { Request, Response } from 'express';
import routes from './routes/user';
import db from './config/database.config';
import { TodoInstance } from './model';
const app = express()

db.sync().then(() => {
  console.log('Connect to database')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(9000, async () => {
  await db.sync()
  console.log('App running on port 9000')
})