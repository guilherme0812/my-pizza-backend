import db from '../config/database.config';
import { DataTypes, Model } from 'sequelize';

interface IUser {
  id: string,
  name: string,
  adress: string,
  status: number,
  email: string,
}

export class UserInstance extends Model<IUser> { }

UserInstance.init(
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
      defaultValue: 3
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'users'
  }
)