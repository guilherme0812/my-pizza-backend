import { Request, Response } from "express";
import { User } from "../model";

class UserController {
  async findAll(req: Request, res: Response) {
    const response = await User.findAll()

    return res.json(response)
  }

  async findOne(req: Request, res: Response) {
    const { email, password } = req.body
    const response = await User.findOne({ where: { email: email, password: password } })
    return res.send(response)
    console.log(req.body)
  }

  async create(req: Request, res: Response) {
    const { name, adress, status, email, password } = req.body
    const response = await User.create({
      id: '',
      name,
      adress,
      status,
      email,
      password
    })
    return res.status(201).json(User)
  }
}
export default new UserController()