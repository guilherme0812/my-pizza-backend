import { Sequelize } from 'sequelize'

const db = new Sequelize('my_pizza', 'root', '', {
  host: 'localhost', dialect: 'mysql', logging: true
})
export default db