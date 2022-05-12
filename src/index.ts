import express from 'express';
import cors from 'cors'
import routes from './routes';
import db from './config/database.config';

db.sync().then( () => {
  console.log('Connect to database')
})

const app = express()

app.use(cors())
app.use(routes)

console.log("Hello world")

app.listen(3333, () => {
  console.log('App running on port 3333')
})