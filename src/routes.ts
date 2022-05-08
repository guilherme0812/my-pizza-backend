import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  res.send("Hellooo world")
})

export default routes