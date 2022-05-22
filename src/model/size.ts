import db from '../config/database.config'
import { Model, DataTypes } from 'sequelize'
import { PizzaOrdered } from './pizzaOrdered'

interface ISize {
  id: string,
  description: string,
  price: string,
  status: number
}

export class Size extends Model <ISize> {}

Size.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'sizes'
  }
)
