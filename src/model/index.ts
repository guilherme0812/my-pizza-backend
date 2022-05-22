import { TodoInstance } from "./todo";
import { User } from "./user";
import { Order } from './order'
import { Flavor } from "./flavor";
import { Size } from "./size";
import { PizzaOrdered } from "./pizzaOrdered";

// PizzaOrdered.belongsTo(Size)
// Size.hasMany(PizzaOrdered)

export { TodoInstance, User, Order, Flavor, Size, PizzaOrdered }