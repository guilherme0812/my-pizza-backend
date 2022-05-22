import db from '../config/database.config'
import { Model, DataTypes } from 'sequelize'
import { Size } from './size'

interface IFlavor {
  id: string,
  flavors: string,
  status: number
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
    flavors: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'pizzaordered'
  }
)

PizzaOrdered.belongsTo(Size)