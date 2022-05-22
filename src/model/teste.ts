import db from '../config/database.config';
import { DataTypes, Model } from 'sequelize';

interface ITeste {
  id: string,
  name: string,
  adress: string,
  status: number,
  email: string,
  password: string
}

export class Teste extends Model<ITeste> { }

Teste.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    tableName: 'teste'
  }
)