import db from '../config/database.config'
import { Model, DataTypes } from 'sequelize'
import { Drink } from './drink'

interface IDrink {
  id: string,
  quantity: number,
  status: number
}

export class DrinkOrdered extends Model <IDrink> {}

DrinkOrdered.init(
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'drinkordered'
  }
)

DrinkOrdered.belongsTo(Drink)