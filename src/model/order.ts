import db from '../config/database.config'
import {Model, DataTypes} from 'sequelize'
import { DrinkOrdered } from './drinkOrdered'
import { PizzaOrdered } from './pizzaOrdered'

interface IOrder {
  id: string
}

export class Order extends Model <IOrder>{}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    }
  },
  {
    sequelize: db,
    tableName: 'orders'
  }
)

Order.belongsTo(PizzaOrdered)
Order.belongsTo(DrinkOrdered)