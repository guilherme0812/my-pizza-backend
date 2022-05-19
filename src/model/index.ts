import { TodoInstance } from "./todo";
import { User } from "./user";
import { Order } from "./order";

User.hasMany(Order)
Order.belongsTo(User)

export {TodoInstance, User, Order}