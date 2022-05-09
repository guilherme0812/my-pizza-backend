import {Request, Response} from 'express'

const users = [{nome: 'Guilherme Maffei', email: 'guilhermemaffeidev@gmail.com'}]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  }
}