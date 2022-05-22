import db from "../config/database.config";
import { DataTypes, Model } from "sequelize";
import {DrinkOrdered} from './drinkOrdered'

interface IDrink {
  id: string,
  description: string,
  price: number,
  status: number,
  type: number,
}

export class Drink extends Model <IDrink> {}

Drink.init(
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
      allowNull: false,
    },
    type: {
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
    tableName: 'drinks'
  }
)