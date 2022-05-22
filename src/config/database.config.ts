import { Sequelize } from 'sequelize'

const db = new Sequelize('mypizza', 'root', '', {
  host: 'localhost', dialect: 'mysql', logging: (str) => console.log(str)
})
export default db