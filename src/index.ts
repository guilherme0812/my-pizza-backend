import express, { Request, Response } from 'express';
import routes from './routes';
import db from './config/database.config';
const app = express()

db.sync().then(() => {
  console.log('Connect to database')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// app.post('/create', async (req: Request, res: Response) => {
//   try {
//     const record = await TodoInstance.create({
//       id: '',
//       title: req.body.title,
//       completed: req.body.completed
//     })
//     return res.json({ msg: 'Todo created', status: 200, route: '/create' })
//   } catch (error) {
//     return res.json({ msg: 'failed to create', status: 500, route: '/create' })
//   }
// })

console.log("Hello world")

app.listen(9000, async () => {
   await db.sync()
  console.log('App running on port 9000')
})