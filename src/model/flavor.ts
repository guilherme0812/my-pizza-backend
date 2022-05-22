import db from '../config/database.config'
import { Model, DataTypes } from 'sequelize'

interface IFlavor {
  id: string,
  description: string,
  ingredients: string,
  additional: number,
  status: number
}

export class Flavor extends Model <IFlavor> {}

Flavor.init(
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
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    additional: {
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
    tableName: 'flavors'
  }
)