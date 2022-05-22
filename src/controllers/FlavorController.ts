import { Request, Response } from "express";
import { Flavor } from '../model'

class FlavorController {
  async findAll (req:Request, res:Response) {
    const response = await Flavor.findAll({where: {status: 4}})
    return res.json(response)
  }
}
export default new FlavorController()