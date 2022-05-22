import express from 'express';
import routes from './routes/routes'
import db from './config/database.config';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)


db.sync()
app.listen(9000, async () => {
  console.log('App running on port 9000')
})