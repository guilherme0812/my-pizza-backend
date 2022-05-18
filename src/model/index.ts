import { TodoInstance } from "./todo";
import { UserInstance } from "./user";
import { OrderInstance } from "./order";

UserInstance.hasMany(OrderInstance)
OrderInstance.belongsTo(UserInstance)

export {TodoInstance, UserInstance, OrderInstance}