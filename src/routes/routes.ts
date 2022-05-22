import { Router } from 'express'
import UserController from '../controllers/UserController';
import FlavorController from '../controllers/FlavorController';

const routes = Router()

// User routes
routes.get('/api/users', UserController.findAll)
routes.get('/api/user', UserController.findOne)
routes.post('/api/users', UserController.create)

// Flavors controllers
routes.get('/api/flavors', FlavorController.findAll)

export default routes