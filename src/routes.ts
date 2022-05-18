import { Router, Request, Response } from 'express'
import UserController from './controllers/UserController'
import { TodoInstance, UserInstance } from './model';

const routes = Router()

routes.get('/api/users', async (req:Request, res:Response) => {
  const response = await UserInstance.findAll()
  res.json(response)
})
// routes.get('/api/users', UserController.index)

export default routes