import express, { Request, Response } from 'express';
import routes from './routes';
import db from './config/database.config';
import { TodoInstance } from './model';
const app = express()

// TodoInstance.sync({force: true})

db.sync().then(() => {
  console.log('Connect to database')
})

app.use(routes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/create', async (req: Request, res: Response) => {
  try {
    const record = await TodoInstance.create({
      id: '',
      title: req.body.title,
      completed: req.body.completed
    })
  } catch (error) {
    return res.json({ msg: 'failed to create', status: 500, route: '/create' })
  }
})

console.log("Hello world")

app.listen(9000, () => {
  console.log('App running on port 9000')
})