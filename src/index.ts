import express from 'express';
import routes from './routes/user';
import db from './config/database.config';
import { Flavor } from './model/flavor';
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)


db.sync({force: true})
app.listen(9000, async () => {
  console.log('App running on port 9000')
})