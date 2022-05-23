import db from '../config/database.config'
import { Model, DataTypes } from 'sequelize'
import { Size } from './size'

interface IFlavor {
  id: string,
  quantity: number,
  flavors: string,
  status: number,
  price: number,
}

export class PizzaOrdered extends Model <IFlavor> {}

PizzaOrdered.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flavors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'pizzaordered'
  }
)

PizzaOrdered.belongsTo(Size)