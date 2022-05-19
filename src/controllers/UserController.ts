import { Request, Response } from "express";
import { User } from "../model";

class UserController {
  async findAll(req: Request, res: Response) {
    const response = await User.findAll()

    return res.json(response)
  }
  async findOne(req: Request, res: Response) { }
  async create(req: Request, res: Response) {
    const { name, adress, status, email } = req.body
    const response = await User.create({
      id: '',
      name,
      adress,
      status,
      email,
    })
    return res.status(201).json(User)
  }
}
export default new UserController()