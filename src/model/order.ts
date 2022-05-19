import db from '../config/database.config'
import {Model, DataTypes} from 'sequelize'

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

